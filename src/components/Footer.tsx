import logo from "../assets/logo.svg";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="max-w-screen-2xl hidden md:block mx-auto bg-[#62412E] px-6 lg:px-16 py-12">
      {/* ---- 4 Column Grid ---- */}
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-14 xl:gap-16">
        {/* Grid 1 */}
        <div>
          <img src={logo} />
          <p className=" font-jost text-white text-[28px] lg:text-[22px] xl:text-[30px] mt-4 ">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>

        {/* Grid 2 */}
        <div>
          <h4 className="font-jost text-white text-[24px]">Quick Links</h4>
          <ul className="mt-4 flex flex-col gap-3">
            {["Home", "Explore", "My Order", "Account", "Contact"].map(
              (link) => (
                <li
                  key={link}
                  className="font-poppins text-white text-[12px] cursor-pointer hover:text-orange-400 transition-colors"
                >
                  {link}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Grid 3 */}
        <div>
          <h4 className="font-jost text-white text-[24px]">Contact Us</h4>
          <ul className="mt-4 flex flex-col gap-3">
            {[
              "+234 801 234 5678",
              "hello@chukskitchen.com",
              "123 Taste Blvd, Lagos, Nigeria",
            ].map((item) => (
              <li key={item} className="font-poppins text-white text-[12px]">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Grid 4 */}
        <div>
          <ul className="flex flex-col gap-3">
            {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
              <li
                key={social}
                className="font-poppins text-white text-[12px] cursor-pointer hover:text-orange-400 transition-colors"
              >
                {social}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---- Bottom Bar ---- */}
      <div className="mt-10 border-white/20 flex justify-between items-center">
        <p className="font-poppins text-white text-[12px]">
          © 2020 Lift Media. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="bg-blue-500 p-3 rounded-full text-white hover:opacity-90 transition-opacity"
        >
          <FaArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
