import React from "react";

export default function Banner() {
  return (
    <div className="w-full h-96 relative overflow-hidden">
      <img src={process.env.PUBLIC_URL + "/images/banner.jpg"} alt="banner" />
      <div className="absolute flex flex-col items-center justify-center w-full h-full top-0 left-0">
        <span className="text-4xl text-white">Shop With US</span>
        <span className="text-2xl text-white">Best Products</span>
      </div>
    </div>
  );
}
