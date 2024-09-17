import React from "react";
import FoodCard from "./FoodCard";

const Orders = ({ cards1, cards2, heading }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-7">
      <div className="w-[32%] flex flex-col items-center justify-center">
        <h1 className="font-bold text-center text-3xl">
          More than <span className="text-[#FF5331]">10,000 </span>Dishes to
          Order!
        </h1>
        <p className="text-center text-sm">
          Welcome to The Biggest Network of Food Ordering & Delivery
        </p>
      </div>
      <div className="w-[80%] h-max flex flex-row justify-between ">
        <div className="w-[39%] h-full flex flex-row  justify-around">
          {cards1.map((item, index) => {
            return <FoodCard icon={item.icon} name={item.name} key={index} />;
          })}
        </div>
        <div className="w-[60%] bg-[#FAFAFA] h-full rounded-3xl flex items-start justify-start flex-col relative p-5">
          <h1 className=" flex-row items-center justify-center text-2xl w-1/2 font-bold">
            Find <span className="text-[#ff5331] w-max">deals</span>,{" "}
            <span className="text-[#009b00]  w-max">free delivery</span>, and
            more from our restaurant partners.
          </h1>
          <img
            src="./assets/scooter.png"
            alt=""
            className=" absolute end-0 bottom-0 right-4"
          />
        </div>
      </div>
      <div className="w-[80%] h-max flex flex-row justify-between ">
        <div className="w-[55%]  h-full rounded-3xl flex items-start justify-center gap-2 flex-col relative p-5">
          <img
            src="./assets/quotes.png"
            alt=""
            className="w-max object-contain"
          />
          <h1 className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </h1>
        </div>
        <div className="w-[48%] h-full flex flex-row  justify-around">
          {cards2.map((item, index) => {
            return <FoodCard icon={item.icon} name={item.name} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
