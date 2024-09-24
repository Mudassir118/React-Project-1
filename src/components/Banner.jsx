import React from "react";
import SearchBar from "./SearchBar";

const Banner = ({ content }) => {
  return (
    <section class="bg-[#FFEFEC] px-10">
      <div class="py-14 px-20 bg-red">
        <div class="w-full flex flex-row justify-between  ">
          <div className=" ">
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold  sm:text-4xl text-black">
              {content.heading}
            </h2>
            <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              {content.description}
            </p>
          </div>
          <div className=" flex items-center  h-max py-10 w-[25vw]  ">
            <SearchBar name={"Enter your Email Address"} btntext={"Send"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
