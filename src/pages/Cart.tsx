import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cart } from "../utils";

// ---- Cart Item Type ----
type CartItem = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
};

// ---- Large Screen Cart Card ----
const LargeCartCard = ({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}: {
  item: CartItem;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}) => (
  <div className="flex items-center gap-4 border border-[#BDBDBD] rounded-lg py-2 px-4 justify-between">
    <img
      src={item.image}
      alt={item.name}
      className="w-[170px] h-[160px] object-cover rounded-lg shrink-0"
    />

    <div className="flex-1">
      <h4 className="font-inter font-bold text-black md:text-[20px] lg:text-[28px] xl:text-[32px]">
        {item.name}
      </h4>
      <p className="font-inter text-[#4B5563] md:text-[14px] lg:text-[20px] xl:text-[24px] mt-1">
        {item.description}
      </p>
    </div>

    {/* Counter */}
    <div className="flex items-center gap-4 lg:gap-10 shrink-0">
      <button
        onClick={onDecrement}
        className="bg-[#BDBDBD] text-black w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[18px]"
      >
        -
      </button>
      <span className="font-inter font-semibold text-black text-[40px] lg:text-[50px] w-4 text-center">
        {item.quantity}
      </span>
      <button
        onClick={onIncrement}
        className="bg-[#BDBDBD] text-black w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[18px]"
      >
        +
      </button>
    </div>

    {/* Price */}
    <span className="font-inter font-bold text-orange-500 text-[20px] shrink-0 w-24 text-center">
      ₦{(item.price * item.quantity).toLocaleString()}
    </span>

    {/* Remove */}
    <button
      onClick={onRemove}
      className="font-inter font-bold text-white  bg-orange-500 w-7 h-7 flex items-center justify-center shrink-0"
    >
      ✕
    </button>
  </div>
);

// ---- Small Screen Cart Card ----
const SmallCartCard = ({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}: {
  item: CartItem;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}) => (
  <div className="border border-[#BDBDBD] rounded-lg p-2 flex items-center gap-2">
    <img
      src={item.image}
      alt={item.name}
      className="w-[100px] h-[100px] object-cover rounded-md shrink-0"
    />

    <div className="flex flex-col flex-1 gap-2">
      <h4 className="font-inter font-bold text-very-dark-blue text-[14px]">
        {item.name}
      </h4>
      <p className="font-inter text-very-dark-blue text-[12px]">
        {item.description}
      </p>

      {/* Counter */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={onDecrement}
          className="bg-[#BDBDBD] text-black w-6 h-6 rounded-lg flex items-center justify-center font-bold text-[16px]"
        >
          -
        </button>
        <span className="font-inter font-semibold text-very-dark-blue text-[20px]">
          {item.quantity}
        </span>
        <button
          onClick={onIncrement}
          className="bg-[#BDBDBD] text-black w-6 h-6 rounded-lg flex items-center justify-center font-bold text-[16px]"
        >
          +
        </button>
      </div>

      {/* Price & Remove */}
      <div className="flex items-center justify-between">
        <span className="font-inter font-medium text-orange-500 text-[14px]">
          ₦{(item.price * item.quantity).toLocaleString()}
        </span>
        <button
          onClick={onRemove}
          className="bg-very-dark-blue text-white  w-6 h-6 flex items-center justify-center text-[12px] font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  </div>
);

// ---- Main Component ----
const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>(
    cart.map((item) => ({ ...item, quantity: 1 })),
  );

  const handleIncrement = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrement = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const handleRemove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-screen-2xl mx-auto  bg-gray min-h-screen px-4 md:px-6 lg:px-16 py-10">
      <div className="bg-white rounded-xl shadow-sm px-2 py-4 md:p-8">
        {/* Heading - desktop only */}
        <h2 className="hidden md:block font-inter font-bold text-black text-[32px] mb-6">
          Your Cart
        </h2>

        {items.length === 0 ? (
          <p className="font-inter text-center text-gray-400 text-[16px] py-10">
            Your cart is empty
          </p>
        ) : (
          <>
            {/* Large Screen Cards */}
            <div className="hidden md:flex flex-col gap-4">
              {items.map((item) => (
                <LargeCartCard
                  key={item.id}
                  item={item}
                  onIncrement={() => handleIncrement(item.id)}
                  onDecrement={() => handleDecrement(item.id)}
                  onRemove={() => handleRemove(item.id)}
                />
              ))}
            </div>

            {/* Small Screen Cards */}
            <div className="flex flex-col gap-4 md:hidden">
              {items.map((item) => (
                <SmallCartCard
                  key={item.id}
                  item={item}
                  onIncrement={() => handleIncrement(item.id)}
                  onDecrement={() => handleDecrement(item.id)}
                  onRemove={() => handleRemove(item.id)}
                />
              ))}
            </div>

            {/* Add More Items */}
            <p
              onClick={() => navigate("/explore")}
              className="font-inter text-blue-600 text-[16px] mt-6 cursor-pointer"
            >
              + Add more items from Chuks Kitchen
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
