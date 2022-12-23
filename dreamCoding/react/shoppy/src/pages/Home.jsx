import React from "react";
import Products from "../components/Products";
import Banner from "../components/ui/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="p-4">
        <Products />
      </div>
    </>
  );
}
