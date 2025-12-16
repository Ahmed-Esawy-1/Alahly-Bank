import React from "react";

const Nav = () => {
  return (
    <>
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-1">
        <a
          className="w-12 h-12 bg-orange text-white flex items-center justify-center hover:bg-orange-600 rounded-l-md shadow-lg transition-all translate-x-1 hover:translate-x-0"
          href="#"
        >
          <span className="material-icons">facebook</span>
        </a>
        <a
          className="w-12 h-12 bg-orange text-white flex items-center justify-center hover:bg-orange-600 rounded-l-md shadow-lg transition-all translate-x-1 hover:translate-x-0"
          href="#"
        >
          <span className="material-icons">camera_alt</span>
        </a>
        <a
          className="w-12 h-12 bg-orange text-white flex items-center justify-center hover:bg-orange-600 rounded-l-md shadow-lg transition-all translate-x-1 hover:translate-x-0"
          href="#"
        >
          <span className="material-icons">chat</span>
        </a>
        <a
          className="w-12 h-12 bg-orange text-white flex items-center justify-center hover:bg-orange-600 rounded-l-md shadow-lg transition-all translate-x-1 hover:translate-x-0"
          href="#"
        >
          <span className="material-icons">currency_exchange</span>
        </a>
        <a
          className="w-12 h-12 bg-green text-white flex items-center justify-center hover:bg-green-700 rounded-l-md shadow-lg mt-4 transition-all translate-x-1 hover:translate-x-0 border-l-4 border-yellow-400"
          href="#"
        >
          <span className="material-icons text-sm font-bold">login</span>
        </a>
      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-green border-2 border-green hover:scale-110 transition-transform">
          <span className="material-icons text-3xl">support_agent</span>
        </button>
      </div>
    </>
  );
};

export default Nav;
