import React from "react";
import logoLight from "../assets/logo/yt_logo_rgb_light.png";
import logoDark from "../assets/logo/yt_logo_rgb_dark.png";

export default function Nav() {
  return (
    <div>
      <img src={logoLight} alt="logo" className="w-24" />
    </div>
  );
}
