import AuthLarge from "../assets/AuthLarge.svg";
import AuthSmall from "../assets/AuthSmall.svg";
import logo from "../assets/logo.svg";
import forkKnife from "../assets/fork-knife-fill.png";
import truck from "../assets/truck.png";
import { useNavigate } from "react-router-dom";

// ---- Features Data ----
const features = [
  { icon: forkKnife, label: "Freshly Prepared" },
  { icon: forkKnife, label: "Support Local Business" },
  { icon: truck, label: "Fast & Reliable Delivery" },
];

// ---- Sub Components ----

const SignInButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/login")}
      className="font-inter font-semibold text-blue-600 text-[16px] border-2 border-blue-600 rounded-lg py-2 w-30"
    >
      Sign In
    </button>
  );
};

const HeroText = ({ paragraphClass }: { paragraphClass: string }) => (
  <>
    <h3 className="text-[32px] lg:text-[30px] xl:text-[36px] font-bold text-very-dark-blue font-inter leading-tight">
      Your Authentic Taste of Nigeria
    </h3>
    <p
      className={`text-[16px] font-inter text-very-dark-blue leading-6 ${paragraphClass}`}
    >
      Experience homemade flavors delivered fresh to your desk or home. We bring
      the rich culinary heritage of Nigeria right to your doorstep.
    </p>
  </>
);

const FeatureCard = ({
  icon,
  label,
  className,
}: {
  icon: string;
  label: string;
  className: string;
}) => (
  <div className={`flex items-center rounded-lg ${className}`}>
    <img src={icon} className="bg-orange-200 p-3 rounded-xl" />
    <p className="font-medium font-inter text-black text-[16px]">{label}</p>
  </div>
);

const ActionButtons = ({ learnMoreClass }: { learnMoreClass: string }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate("/home")}
        className="font-inter font-semibold text-white w-full p-4 mt-12 lg:mt-6 xl:mt-12 rounded-lg bg-orange-500"
      >
        Start Your Order
      </button>
      <button
        onClick={() => navigate("/home")}
        className={`font-inter font-semibold text-blue-600 w-full p-4 rounded-lg border-2 border-blue-600 ${learnMoreClass}`}
      >
        Learn More About Us
      </button>
    </>
  );
};

const Onboarding = () => {
  return (
    <div>
      {/*---MOBILE VIEW--- */}
      <div className="lg:hidden px-4 pb-10">
        {/* Hero Image */}
        <div className="py-4 flex items-center justify-center">
          <img src={AuthSmall} className="w-full" />
        </div>

        {/* Sign In Button */}
        <div className="flex justify-end mt-2">
          <SignInButton />
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center mt-12">
          <img src={logo} width={200} />
        </div>

        {/* Hero Text */}
        <div className="mt-2">
          <HeroText paragraphClass="mt-1" />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.label}
              icon={feature.icon}
              label={feature.label}
              className="mt-3 bg-gray gap-2 p-2"
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <ActionButtons learnMoreClass="mt-2" />
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:flex max-w-screen-2xl mx-auto">
        {/* Left - Hero Image */}
        <div
          className="w-1/2 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${AuthLarge})` }}
        />

        {/* Right - Content */}
        <div className="w-1/2   px-12">
          {/* Top */}
          <div className="flex mt-4 justify-between items-center">
            <img src={logo} />
            <SignInButton />
          </div>

          {/* Hero Text */}
          <div className="lg:mt-16 xl:mt-30">
            <HeroText paragraphClass="mt-4" />
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:mt-4 xl:mt-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.label}
                icon={feature.icon}
                label={feature.label}
                className="mt-3 gap-3"
              />
            ))}
          </div>
          <ActionButtons learnMoreClass="lg:mt-4 xl:mt-8" />
          <div className="lg:mt-16 xl:mt-30">
            <hr className="text-gray" />
            <div className="mt-3 pb-10 flex gap-4 justify-center">
              <span className="text-[14px] font-inter text-very-dark-blue">
                © 2024 Chuks Kitchen.
              </span>
              <span className="text-[14px] font-inter text-blue-300">
                Privacy Policy
              </span>
              <span className="text-[14px] font-inter text-blue-300">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
