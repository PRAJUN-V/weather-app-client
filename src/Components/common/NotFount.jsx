import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#1a1a1a] to-[#333333]">
        <h1 className="text-9xl font-bold text-white tracking-widest drop-shadow-lg">
          404
        </h1>
        <div className="bg-gradient-to-r from-[#FF8C00] to-[#FF4500] px-4 py-2 text-sm rounded-lg rotate-6 shadow-xl transform translate-y-4">
          Page Not Found
        </div>
        <button className="mt-10 transform transition-transform duration-300 hover:scale-105">
          <Link
            to="/"
            className="relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#FF8C00] to-[#FF4500] rounded-full transition-transform transform -translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0 shadow-lg"></span>
            <span className="relative block px-10 py-4 bg-[#1a1a1a] rounded-full border border-transparent text-white font-semibold shadow-lg">
              Go Home
            </span>
          </Link>
        </button>
      </main>
    </div>
  );
};

export default NotFound;
