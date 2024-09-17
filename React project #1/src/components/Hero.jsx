import React from "react";
import Button from "./Button";
import DownloadButton from "./DownloadButton";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="w-[90%] mx-auto px-10 h-[70vh] flex-row flex justify-between ">
      <div className="w-[40%]  flex flex-col justify-center gap-7 ">
        <h1 className="text-[4rem] font-bold">
          Your Favorite Food Delivery Partner
        </h1>
        <h3>
          The food at your doorstep. Why starve when you have us. You hunger
          partner. Straight out of the oven to your doorstep.{" "}
        </h3>

       <div className="w-[80%]"> <SearchBar
          name={"Enter your Delivery Location"}
          btntext={"Order Now"}
        /></div>
        <div className="flex flex-row justify-between w-max gap-3">
          <DownloadButton
            text="Donwload on the"
            storename="App Store"
            icon="./assets/apple.png"
          />
          <DownloadButton
            text="Get it on"
            storename="Google Play"
            icon="./assets/playstore.png"
          />
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-[90%] h-[90%]  bg-[#F2EBDA] flex items-end justify-end rounded-2xl">
          <img
            src="./assets/hero.png"
            alt=""
            className="w-full h-[90%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
