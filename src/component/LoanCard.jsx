import React from "react";

const LoanCard = ({ title, year, amountTitle = "Reach up to", amount }) => {
  return (
    <div className="bg-[#eee] border-2 border-[#aaa] rounded-md max-w-[400px] p-5 mx-auto">
      <h3 className="text-[#727170] text-lg text-center font-bold mb-2">
        {title}
      </h3>
      <hr className="w-[50%] mx-auto border-dotted" />
      <div className="flex font-bold p-3">
        <div className="flex-1 flex border-r border-gray-500 pr-2">
          <p className="text-[#727170]">Loan tenor up to</p>
          <p className="text-orange text-4xl text-center">
            {year}
            <span className="block text-2xl text-[#727170] font-extrabold">
              Years
            </span>
          </p>
        </div>
        <div className="flex-1 text-center">
          <span className="block text-sm mt-2 text-[#727170]">
            {amountTitle}
          </span>
          <p className="text-orange text-2xl font-extrabold">
            {amount}
            <span className="block text-sm text-[#727170]">EGP</span>
          </p>
        </div>
      </div>
      <ul className="mt-3">
        <li className="flex items-start text-[#444] mb-1 before:content-['\e904'] before:font-[icomoon] before:font-[900] before:inline-block before:text-orange before:text-2xl before:mr-4">
          Free Life and total disability insurance
        </li>
        <li className="flex items-start text-[#444] mb-1 before:content-['\e904'] before:font-[icomoon] before:font-[900] before:inline-block before:text-orange before:text-2xl before:mr-4">
          Free current account
        </li>
        <li className="flex items-start text-[#444] mb-1 before:content-['\e904'] before:font-[icomoon] before:font-[900] before:inline-block before:text-orange before:text-2xl before:mr-4">
          Without guarantor
        </li>
      </ul>
      <div className="flex gap-2 justify-center mt-[40px]">
        <button className="flex-1">
          <a
            className="block bg-green text-white rounded-md px-3 py-2 duration-500 hover:bg-green-700"
            href=""
          >
            Apply Now
          </a>
        </button>
        <button className="flex-1">
          <a
            className="block border border-green text-green rounded-md px-3 py-2 duration-500 hover:bg-green-700 hover:text-white"
            href=""
          >
            Find More
          </a>
        </button>
      </div>
    </div>
  );
};

export default LoanCard;
