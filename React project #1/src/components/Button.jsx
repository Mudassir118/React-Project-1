import React from "react";

const Button = ({ text, isBg, isSearchBar }) => {
  return (
    <button
      type="submit"
      className={`px-8 
        ${isBg ? "bg-[#FF5331] text-white" : "text-black "} 
        hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 
        font-medium rounded-[56px] text-sm p-5`}
    >
    <h3 className=" font-bold">  {text}</h3>
    </button>
  );
};

export default Button;
