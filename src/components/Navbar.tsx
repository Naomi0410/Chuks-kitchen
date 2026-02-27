import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/home" },
  { label: "Explore", path: "/explore" },
  { label: "My Order", path: "/cart" },
  { label: "Account", path: null },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string | null) =>
    path ? location.pathname === path : false;

  return (
    <>
      <nav className=" bg-white px-4 md:px-6 lg:px-16 py-4 shadow-sm">
        {/*----MOBILE VIEW---*/}
        <div className="flex items-center justify-between md:hidden">
          {/* Logo */}
          <img
            src={logo}
            width={150}
            onClick={() => navigate("/home")}
            className="cursor-pointer"
          />

          {/* Hamburger */}
          <button onClick={() => setDrawerOpen(true)} className="text-black">
            <Menu size={30} />
          </button>
        </div>

        {/* ---DESKTOP VIEW --- */}
        <div className="max-w-screen-2xl mx-auto hidden md:flex items-center justify-between">
          {/* Logo */}
          <img src={logo} onClick={() => navigate("/home")}
            className="cursor-pointer"/>

          {/* Nav Links */}
          <div className="flex items-center gap-12 lg:gap-20 xl:gap-40">
            {navLinks.map((link) => (
              <span
                key={link.label}
                onClick={() => link.path && navigate(link.path)}
                className={`font-inter font-medium text-[16px] transition-colors ${
                  link.path
                    ? isActive(link.path)
                      ? "text-orange-500 cursor-pointer"
                      : "text-very-dark-blue cursor-pointer"
                    : "text-black cursor-not-allowed"
                }`}
              >
                {link.label}
              </span>
            ))}
          </div>

          {/* Login Button */}
          <button
            onClick={() => navigate("/login")}
            className="w-28 lg:w-40 font-inter font-semibold text-white bg-orange-500 rounded-lg py-3 px-8"
          >
            Login
          </button>
        </div>
      </nav>

      {/* ---MOBILE DRAWER --- */}

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[250px] bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-end px-6 py-4 border-b border-gray-100">
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-[#1F2937]"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => (
            <span
              key={link.label}
              onClick={() => link.path && navigate(link.path)}
              className={`font-inter font-medium text-[16px] transition-colors ${
                link.path
                  ? isActive(link.path)
                    ? "text-orange-500 cursor-pointer"
                    : "text-very-dark-blue cursor-pointer"
                  : "text-black cursor-not-allowed"
              }`}
            >
              {link.label}
            </span>
          ))}

          {/* Login Button */}
          <button
            onClick={() => navigate("/login")}
            className="font-inter font-semibold text-white bg-orange-500 rounded-lg py-3 w-full mt-4"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
