"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

export default function DarkModeToggle() {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      className="relative w-[42px] h-[24px] border-[1.5px] border-[#53c28b70] rounded-[30px] justify-between items-center p-[2px] flex"
      onClick={toggle}
    >
      <div className="cursor-pointer text-[12px]">🌙</div>
      <div className="cursor-pointer text-[12px]">☀️</div>
      <div
        className="rounded-full w-[15px] h-[15px] bg-[#53c28b] absolute cursor-pointer"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
