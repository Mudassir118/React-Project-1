import React from "react";
import FoodCard from "./FoodCard";

const Orders = ({ content }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-7">
      <div className="w-[35%] flex flex-col items-center justify-center">
        <h1 className="font-bold text-center text-3xl">{content.heading[0]}</h1>
        <p className="text-center text-sm">{content.heading[1]}</p>
      </div>
      <div className="">
        <div className="w-1/2 mx-auto  h-max flex flex-col items-center justify-center gap-5">
          <img
            src="./assets/quotes-orange.png"
            alt=""
            className="object-contain"
          />
          <h2 className="text-center italic font-bold">{content.quote}</h2>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center gap-4">
        <div>
          {" "}
          <h1 className="text-xl font-bold ">Mitchell Marsh</h1>
          <h4 className="text-gray-400">CEO, Bexon Agency</h4>
        </div>
        <div className="flex justify-between gap-2">
          {" "}
          <button className="rounded-full bg-orange-500 text-white px-4 py-2 focus:outline-none hover:bg-blue-600">
            Prev
          </button>
          <button className="rounded-full bg-blue-500 text-white px-4 py-2 focus:outline-none hover:bg-blue-600">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
