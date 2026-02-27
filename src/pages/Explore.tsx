import explorehero from "../assets/explorehero.png";
import homeHero from "../assets/homeHero.png";
import { useState } from "react";
import { popular, jollofrice, swallow } from "../utils";

// ---- Menu Categories ----
const menuCategories = [
  "Popular",
  "Jollof Rice & Entrees",
  "Swallow & Soups",
  "Grills & Sides",
  "Beverages",
  "Desserts",
];

// ---- Menu Categories List ----
const MenuList = ({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}) => (
  <ul>
    {menuCategories.map((category) => (
      <li
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`font-inter font-medium text-black text-[24px] px-6 py-3 cursor-pointer transition-all ${
          activeCategory === category
            ? "bg-orange-100 border-l-4 border-orange-500"
            : "border-l-4 border-transparent hover:bg-orange-50"
        }`}
      >
        {category}
      </li>
    ))}
  </ul>
);

const LargeFoodCard = ({ item }: { item: (typeof popular)[0] }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
    <img
      src={item.imageB}
      alt={item.name}
      className="w-full h-[200px] object-cover"
    />
    <div className="p-4 flex flex-col flex-1">
      <h4 className="font-inter font-bold text-very-dark-blue text-[24px]">
        {item.name}
      </h4>
      <p className="font-inter text-very-dark-blue text-[16px] mt-2">
        {item.description}
      </p>
      <div className="flex items-center justify-between mt-auto pb-3 pt-4">
        <span className="font-inter font-bold text-orange-500 text-[16px]">
          {item.price}
        </span>
        <button className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-[20px] font-bold">
          +
        </button>
      </div>
    </div>
  </div>
);

// ---- Food Card - Small Screen ----
const SmallFoodCard = ({ item }: { item: (typeof popular)[0] }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm flex h-[120px]">
    <div className="p-2 shrink-0">
      <img
        src={item.imageA}
        alt={item.name}
        className="w-[100px] h-full object-cover rounded-md"
      />
    </div>
    <div className="p-2 flex flex-col justify-between flex-1">
      <div>
        <h4 className="font-inter font-bold text-very-dark-blue text-[14px]">
          {item.name}
        </h4>
        <p className="font-inter text-very-dark-blue text-[12px] mt-1 leading-5 line-clamp-2">
          {item.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-inter font-bold text-orange-500 text-[14px]">
          {item.price}
        </span>
        <button className="bg-orange-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-[18px] font-bold">
          +
        </button>
      </div>
    </div>
  </div>
);

// ---- Food Section ----
type FoodItem = {
  id: number;
  name: string;
  imageA?: string;
  imageB: string;
  description: string;
  price: string;
};

const FoodSection = ({
  title,
  items,
}: {
  title: string;
  items: FoodItem[];
}) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="mt-10">
      <h3 className="font-inter font-bold text-very-dark-blue text-[24px] mb-6">
        {title}
      </h3>

      {/* Mobile Cards */}
      <div className="flex flex-col gap-4 md:hidden">
        {(showAll
          ? items.filter((item) => item.imageA)
          : items.filter((item) => item.imageA).slice(0, 3)
        ).map((item) => (
          <SmallFoodCard key={item.id} item={item} />
        ))}
      </div>

      {/* Desktop Cards */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <LargeFoodCard key={item.id} item={item} />
        ))}
      </div>

      {/* View All - mobile only */}
      <div className="mt-4 flex justify-center md:hidden">
        <span
          onClick={() => setShowAll(!showAll)}
          className="font-inter text-blue-600 text-[16px] cursor-pointer"
        >
          {showAll ? "Show Less" : "View All Categories"}
        </span>
      </div>
    </div>
  );
};

// ---- Main Component ----
const Explore = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");

  return (
    <div className="max-w-screen-2xl mx-auto bg-gray">
      {/* ---- Hero Section ---- */}
      <div className="relative">
        {/* Mobile Image */}
        <img
          src={homeHero}
          className="md:hidden w-full h-[600px] object-cover object-center"
        />
        {/* Desktop Image */}
        <img
          src={explorehero}
          className="hidden md:block w-full object-cover object-center"
        />

        {/* Mobile Overlay */}
        <div className="absolute inset-0 bg-[#0000004D] md:hidden" />
        {/* Desktop Overlay */}
        <div className="absolute inset-0 bg-[#00000073] hidden md:block" />

        {/* Text */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-6 lg:px-16">
          <h1 className="font-inter font-bold text-white text-[32px] md:text-[40px] lg:text-[48px]">
            Chuks Kitchen
          </h1>
          <p className="font-inter text-white text-[16px] md:text-[18px] lg:text-[24px] mt-2">
            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </p>
        </div>

        {/* Mobile Menu Card  */}
        <div className="md:hidden absolute -bottom-[40%] left-0 right-0">
          <div className="bg-white  shadow-sm">
            <h4 className="font-inter font-semibold text-black text-[24px] px-6 py-6">
              Menu Categories
            </h4>
            <MenuList
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
        </div>
      </div>

      {/* Space for mobile menu card overlap */}
      <div className="md:hidden h-[250px]" />

      {/* ---- Desktop Menu Categories Card ---- */}
      <div className="hidden md:block md:mx-6 lg:mx-16 md:mt-8 pb-4 bg-white md:rounded-t-xl md:shadow-sm">
        <h4 className="font-inter font-semibold text-black text-[24px] px-6 py-8">
          Menu Categories
        </h4>
        <MenuList
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      {/* ---- Food Sections ---- */}
      <div className="px-4 md:px-6 lg:px-16 pb-10">
        <FoodSection title="Popular" items={popular} />
        <FoodSection title="Jollof Rice & Entrees" items={jollofrice} />
        <FoodSection title="Swallow & Soups" items={swallow} />
      </div>
    </div>
  );
};

export default Explore;
