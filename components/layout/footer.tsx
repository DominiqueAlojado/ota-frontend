import React from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="lg:block h-20 w-full  p-2 bg-[#30363D]">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center h-full">
        <p className="text-white text-xs text-left">
          © {currentYear} MRGE Job Portal
        </p>
        <p className="text-white text-xs text-right flex items-center">
          <span className="mr-2">
            <a href="#">
              <FaFacebookSquare className="w-5 h-5" />
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};
