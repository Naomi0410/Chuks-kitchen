import AuthLarge from "../assets/AuthLarge.svg";
import logo from "../assets/logo.svg";
import lock from "../assets/lock.png";
import mail from "../assets/mail.png";
import call from "../assets/call.png";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

type SignupFormData = {
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>();

  const onSubmit = () => {
    navigate("/home");
  };

  // watch password field for confirm password validation
  const password = watch("password");

  // ---- Form Content (shared between mobile and desktop) ----
  const FormContent = () => (
    <div className="w-full">
      <img src={logo} className="mx-auto" />
      <h3 className="font-inter text-center text-[24px] text-black font-medium mt-1">
        Create Your Account
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">

        {/* Email */}
        <div>
          <label className="font-inter font-medium text-[14px] text-gray-800 mb-1 block">
            Email
          </label>
          <div className={`flex items-center gap-3 border rounded-lg px-4 py-3 ${errors.email ? "border-red-500" : "border-[#BDBDBD]"}`}>
            <img src={mail} className="w-3 h-3" />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
              type="text"
              placeholder="name@gmail.com"
              className="flex-1 min-w-0 outline-none font-inter text-[16px] bg-transparent text-very-dark-blue placeholder-black"
            />
          </div>
          {errors.email && (
            <p className="font-inter text-red-500 text-[13px] mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="mt-6">
          <label className="font-inter font-medium text-[14px] text-gray-800 mb-1 block">
            Phone number
          </label>
          <div className={`flex items-center gap-3 border rounded-lg px-4 py-3 ${errors.phoneNumber ? "border-red-500" : "border-[#BDBDBD]"}`}>
            <img src={call} className="w-3 h-3" />
            <input
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[0-9]{10,14}$/,
                  message: "Enter a valid phone number",
                },
              })}
              type="text"
              placeholder="8123340690"
              className="flex-1 min-w-0 outline-none font-inter text-[16px] bg-transparent text-very-dark-blue placeholder-black"
            />
          </div>
          {errors.phoneNumber && (
            <p className="font-inter text-red-500 text-[13px] mt-1">
              {errors.phoneNumber.message}
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
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-])/,
                  message: "Password must contain an uppercase letter, number and special character",
                },
              })}
              type={showPassword ? "text" : "password"}
              placeholder="QWE123#"
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

        {/* Confirm Password */}
        <div className="mt-6">
          <label className="font-inter font-medium text-[14px] text-gray-800 mb-1 block">
            Confirm password
          </label>
          <div className={`flex items-center gap-3 border rounded-lg px-4 py-3 ${errors.confirmPassword ? "border-red-500" : "border-[#BDBDBD]"}`}>
            <img src={lock} className="w-3 h-3" />
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="QWE123#"
              className="flex-1 min-w-0 outline-none font-inter text-[16px] bg-transparent text-very-dark-blue placeholder-black"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-[#616161] shrink-0"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="font-inter text-red-500 text-[13px] mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Terms & Conditions */}
        <div className="mt-4">
          <div className="flex items-start gap-2">
            <input
              {...register("agreeToTerms", {
                required: "You must agree to the Terms & Conditions",
              })}
              type="checkbox"
              className="mt-1 shrink-0 accent-orange-500"
            />
            <p className="font-inter text-[14px]">
              <span className="text-[#616161]">I agree to the </span>
              <span className="text-[#1E88E5] cursor-pointer">Terms & Conditions</span>
              <span className="text-[#616161]"> and </span>
              <span className="text-[#1E88E5] cursor-pointer">Privacy Policy</span>
            </p>
          </div>
          {errors.agreeToTerms && (
            <p className="font-inter text-red-500 text-[13px] mt-1">
              {errors.agreeToTerms.message}
            </p>
          )}
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="font-inter font-semibold text-white w-full p-4 mt-6 rounded-lg bg-orange-500"
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
          Continue with Facebook
        </button>

        {/* Sign In */}
        <p className="font-inter text-center text-[14px] text-[#616161] mt-6 mb-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#1E88E5] cursor-pointer"
          >
            Sign In
          </span>
        </p>

      </form>
    </div>
  );

  return (
    <div>

      {/* ===================== MOBILE VIEW ===================== */}
      <div className="lg:hidden min-h-screen bg-white flex flex-col items-center justify-center py-10 px-6">
        <div className="w-full max-w-[470px]">
          <FormContent />
        </div>
      </div>

      {/* ===================== DESKTOP VIEW ===================== */}
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
            <FormContent />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Signup;