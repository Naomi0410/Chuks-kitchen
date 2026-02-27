import homeHero from "../assets/homeHero.png";
import home from "../assets/home.png";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { categories, specials } from "../utils";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllSpecials, setShowAllSpecials] = useState(false);

  return (
    <div className="max-w-screen-2xl mx-auto bg-gray">
      {/* ---- Hero Section ---- */}
      <div className="relative">
        <img
          src={homeHero}
          className="w-full h-[600px] md:h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0000004D] lg:bg-[#00000073]" />
        <div className="absolute inset-0 flex px-4 md:px-6 lg:px-16 flex-col justify-center">
          <h1 className="font-inter font-bold text-white text-[32px] md:text-[40px] lg:text-[48px]">
            The Heart of Nigerian Home <br className="hidden md:block" />Cooking
          </h1>
          <p className="font-inter font-semibold text-white text-[16px] md:text-[20px] lg:text-[32px] mt-4">
            Handcrafted with passion, delivered with care.
          </p>
          <button
            onClick={() => navigate("/explore")}
            className="font-inter w-[215px] font-semibold text-white bg-orange-500 rounded-lg py-3 mt-8"
          >
            Discover what's new
          </button>
        </div>

        {/* Search Bar */}
        <div className="absolute -bottom-7 left-0 right-0 flex justify-center px-4 md:px-20 lg:px-36">
          <div className="w-full bg-white rounded-lg shadow-lg px-4 md:px-6 py-3 md:py-4 flex items-center gap-3">
            <Search size={25} className="text-[#807373] shrink-0" />
            <input
              type="text"
              placeholder="What are you craving for today?"
              className="flex-1 min-w-0 outline-none font-inter font-semibold text-[14px] lg:text-[20px] bg-transparent placeholder-very-dark-blue"
            />
          </div>
        </div>
      </div>

      {/* Space for search bar overlap */}
      <div className="h-20" />

      {/* ---- Categories Section ---- */}
      <div className="px-4 md:px-6 lg:px-16 py-8">
        <h3 className="text-very-dark-blue font-inter font-bold text-[24px] lg:text-[32px] text-center mb-8">
          Popular Categories
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => navigate("/explore")}
              className={`bg-white rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow ${
                index >= 3 && !showAllCategories ? "hidden md:block" : "block"
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full object-cover"
              />
              <p className="font-inter font-semibold text-very-dark-blue text-[16px] text-center py-4">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <span
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="font-inter text-blue-600 text-[16px] cursor-pointer"
          >
            {showAllCategories ? "Show Less" : "View All Categories"}
          </span>
        </div>
      </div>

      {/* ---- Specials Section ---- */}
      <div className="px-4 md:px-6 lg:px-16 py-20">
        <h3 className="pt-8 text-very-dark-blue font-inter font-bold text-[24px] lg:text-[32px] text-center mb-8">
          Chef's Specials
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {specials.map((special, index) => (
            <div
              key={special.id}
              className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                index >= 3 && !showAllSpecials ? "hidden md:block" : "block"
              }`}
            >
              {/* Image */}
              <img
                src={special.image}
                alt={special.name}
                className="w-full object-cover"
              />

              {/* Content */}
              <div className="px-4 pt-6 pb-10">
                <h4 className="font-inter font-bold text-very-dark-blue text-[24px]">
                  {special.name}
                </h4>
                <p className="font-inter text-very-dark-blue text-[16px] mt-2 leading-5">
                  {special.description}
                </p>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between mt-4">
                  <span className="font-inter font-bold text-orange-500 text-[16px]">
                    {special.price}
                  </span>
                  <button
                    onClick={() => navigate("/cart")}
                    className="font-inter font-semibold text-white bg-orange-500 rounded-lg py-2 px-4 text-[14px]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Specials - mobile only */}
        <div className="mt-6 flex justify-center md:hidden">
          <span
            onClick={() => setShowAllSpecials(!showAllSpecials)}
            className="font-inter text-blue-600 text-[16px] cursor-pointer"
          >
            {showAllSpecials ? "Show Less" : "View All Specials"}
          </span>
        </div>
      </div>

      <div className="relative">
        <img
          src={home}
          className="w-full h-[600px] md:h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1D1D1D73]" />
        <div className="absolute inset-0 flex px-4 md:px-6 lg:px-16 flex-col justify-center">
          <h1 className="font-inter font-bold text-white text-[32px] md:text-[40px] lg:text-[48px]">
            Introducing Our New Menu Additions!
          </h1>
          <p className="font-inter font-semibold text-white text-[20px] lg:text-[24px] mt-4">
            Explore exciting new dishes, crafted with the freshest <br />{" "}
            ingredients and authentic Nigerian flavors. Limited time <br />{" "}
            offer!
          </p>
          <button
            onClick={() => navigate("/explore")}
            className="font-inter w-[215px] font-semibold text-white bg-orange-500 rounded-lg py-3 mt-8"
          >
            Discover what's new
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
