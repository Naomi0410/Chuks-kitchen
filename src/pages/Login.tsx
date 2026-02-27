import AuthLarge from "../assets/AuthLarge.svg";
import logo from "../assets/logo.svg";
import lock from "../assets/lock.png";
import mail from "../assets/mail.png";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

type LoginFormData = {
  emailOrPhone: string;
  password: string;
};

// ---- Form Props Type ----
type FormContentProps = {
  register: ReturnType<typeof useForm<LoginFormData>>["register"];
  handleSubmit: ReturnType<typeof useForm<LoginFormData>>["handleSubmit"];
  errors: ReturnType<typeof useForm<LoginFormData>>["formState"]["errors"];
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  onSubmit: () => void;
  navigate: ReturnType<typeof useNavigate>;
};

// ---- Form Content----
const FormContent = ({
  register,
  handleSubmit,
  errors,
  showPassword,
  setShowPassword,
  onSubmit,
  navigate,
}: FormContentProps) => (
  <div className="w-full">
    <img src={logo} className="mx-auto" />
    <h3 className="font-inter text-center text-[24px] text-black font-medium mt-1">
      Login your Account
    </h3>

    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">

      {/* Email or Phone */}
      <div>
        <label className="font-inter font-medium text-[14px] text-gray-800 mb-1 block">
          Email or phone number
        </label>
        <div className={`flex items-center gap-3 border rounded-lg px-4 py-3 ${errors.emailOrPhone ? "border-red-500" : "border-[#BDBDBD]"}`}>
          <img src={mail} className="w-3 h-3" />
          <input
            {...register("emailOrPhone", {
              required: "Email or phone number is required",
              pattern: {
                value: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(\+?[0-9]{10,14})$/,
                message: "Enter a valid email or phone number",
              },
            })}
            type="text"
            placeholder="name@gmail.com"
            className="flex-1 min-w-0 outline-none font-inter text-[16px] bg-transparent text-very-dark-blue placeholder-black"
          />
        </div>
        {errors.emailOrPhone && (
          <p className="font-inter text-red-500 text-[13px] mt-1">
            {errors.emailOrPhone.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="mt-6">
        <label className="font-inter font-medium text-[14px] text-gray-800 mb-1 block">
          Password
        </label>
        <div className={`flex items-center gap-3 border rounded-lg px-4 py-3 ${errors.password ? "border-red-500" : "border-[#BDBDBD]"}`}>
          <img src={lock} className="w-3 h-3" />
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type={showPassword ? "text" : "password"}
            placeholder="******"
            className="flex-1 min-w-0 outline-none font-inter text-[16px] bg-transparent text-very-dark-blue placeholder-black"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-[#616161] shrink-0"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && (
          <p className="font-inter text-red-500 text-[13px] mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Forgot Password */}
      <div className="flex justify-end mt-4">
        <span
          onClick={() => navigate("/forgot-password")}
          className="font-inter text-[14px] text-blue-600 cursor-pointer"
        >
          Forgot Password?
        </span>
      </div>

      {/* Continue Button */}
      <button
        type="submit"
        className="font-inter font-semibold text-white w-full p-4 mt-4 rounded-lg bg-orange-500"
      >
        Continue
      </button>

      {/* Divider */}
      <div className="flex items-center gap-10 mt-4">
        <hr className="flex-1 border-2 border-[#EEF0F4]" />
        <span className="font-inter text-[12px] text-very-dark-blue">
          Or continue with
        </span>
        <hr className="flex-1 border-2 border-[#EEF0F4]" />
      </div>

      {/* Social Buttons */}
      <button
        type="button"
        className="flex items-center justify-center gap-3 bg-white w-full p-4 mt-6 rounded-lg border-2 border-[#BDBDBD] font-inter text-gray-800 text-[14px]"
      >
        <img src={google} />
        Continue with Google
      </button>
      <button
        type="button"
        className="flex items-center justify-center gap-3 bg-white w-full p-4 mt-3 rounded-lg border-2 border-[#BDBDBD] font-inter text-gray-800 text-[14px]"
      >
        <img src={facebook} />
        Continue with Apple
      </button>

      {/* Create Account */}
      <p className="font-inter text-center text-[14px] text-[#616161] mt-6">
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          className="text-blue-600 cursor-pointer"
        >
          Create an account
        </span>
      </p>

    </form>
  </div>
);

// ---- Main Component ----
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = () => {
    navigate("/home");
  };

  return (
    <div>

      {/* --- MOBILE VIEW --- */}
      <div className="lg:hidden min-h-screen bg-white flex flex-col items-center justify-center py-10 px-6">
        <div className="w-full max-w-md">
          <FormContent
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            onSubmit={onSubmit}
            navigate={navigate}
          />
        </div>
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:flex min-h-screen max-w-screen-2xl mx-auto">

        {/* Left - Image with overlay */}
        <div
          className="w-1/2 relative flex flex-col justify-center items-center text-center"
          style={{
            backgroundImage: `url(${AuthLarge})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="absolute inset-0 bg-[#FF7A18] opacity-70" />
          <div className="relative z-10 w-[400px]">
            <h2 className="font-inter font-bold text-[48px] text-white">
              Chuks Kitchen
            </h2>
            <p className="font-inter text-[24px] mt-4 text-white">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="py-10 w-1/2 flex flex-col items-center justify-center bg-gray">
          <div className="w-[470px]">
            <FormContent
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              onSubmit={onSubmit}
              navigate={navigate}
            />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Login;