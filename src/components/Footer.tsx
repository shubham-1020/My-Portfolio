// Footer.tsx
"use client";
import React from "react";
import { useTheme } from "@/app/Context/ThemeContext";
import Link from "next/link";

function Footer() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <footer
      className={`w-full p-6 text-center ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-300 mt-10`}
    >
      <div className="flex justify-center space-x-4 mb-4">
        <Link href="https://github.com/shubham-1020" className="hover:underline">
          GitHub
        </Link>
        <Link href="https://leetcode.com/u/sibbu_69/" className="hover:underline">
          LeetCode
        </Link>
        <Link href="https://www.linkedin.com/in/shubham-a6086720b/" className="hover:underline">
          LinkedIn
        </Link>
      </div>
      <p className="mt-4 text-sm">
        &copy; {new Date().getFullYear()} Shubham. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
