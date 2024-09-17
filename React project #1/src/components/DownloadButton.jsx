import React from "react";
// import appleicon from "../../public/assets/ima"

const DownloadButton = ({ text, icon, storename }) => {
  return (
    <button className="w-max bg-[#F4F4F4] flex-row flex justify-between py-3 px-5 rounded-lg">
      <img src={icon} alt="" className="w-8 h-8 m-auto" />
      <div className="flex flex-col justify-start items-start ">
        <p className="text-sm ">{text}</p>
        <h1 className="text-xl font-bold">{storename}</h1>
      </div>
    </button>
  );
};

export default DownloadButton;
