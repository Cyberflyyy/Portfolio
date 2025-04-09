"use client";

import { useTheme } from "@/context/theme-context";

import { BsMoon, BsSun } from "react-icons/bs";
import { useState } from "react";

export default function ThemeLanguageSwitch() {
  const { theme, toggleTheme } = useTheme();

  const [isChanged, setIsChanged] = useState(false);
  const handleClick = () => {
    setIsChanged(!isChanged);
  };
  return (
    <div className="fixed bottom-5 right-5 flex gap-3">
      <button
        className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={handleClick}
      >
        {isChanged ? "EN" : "PL"}
      </button>

      <button
        className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={toggleTheme}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    </div>
  );
}
