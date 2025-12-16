// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
const loansType = [
  {
    imgPath: "auto-loan.svg",
    body: "Auto Loan",
    path: "loan",
  },
  {
    imgPath: "mortgage.svg",
    body: "CBE's Mortgage Finance Initiatives",
    path: "",
  },
  {
    imgPath: "personal-loan.svg",
    body: "Personal Cash Loan",
    path: "/loans/personal-loans/main",
  },
];
import BreadCrumbs from "../../component/BreadCrumbs";

const loanBreadCrumbs = [
  { title: "Retail", path: "" },
  { title: "Loans", path: "" },
];
const Loans = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <BreadCrumbs breadCrumbs={loanBreadCrumbs} />
      <img src="/images/loans.jpg" alt="" />
      <Swiper
        spaceBetween={10}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          650: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          950: { slidesPerView: 3 },
        }}
        className="container my-5"
      >
        {loansType.map((loan, i) => (
          <SwiperSlide key={i} className="mb-[50px]">
            <div className="max-w-[380px] mx-auto">
              <div className="h-[207px] mb-4">
                <img
                  className="w-full h-full"
                  src={`/images/loans/${loan.imgPath}`}
                  alt=""
                />
              </div>

              <h3 className="min-h-[80px] text-2xl font-bold p-2 mb-5">
                {loan.body}
              </h3>

              <a
                className="block w-fit ml-auto bg-green text-white rounded-lg px-[50px] py-[5px]"
                href={loan.path}
              >
                Find More
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container mb-5">
        <button
          className={`flex items-center gap-3 w-full text-lg font-bold rounded-md px-3 py-1 mb-4 duration-300  ${
            open ? "text-orange border border-orange" : "bg-orange text-white"
          } cursor-pointer`}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`inline-block text-4xl ${
              open ? "icon-keyboard_arrow_up" : "icon-keyboard_arrow_down"
            }`}
          ></span>
          Loans guaranteed by deposits, saving pools and investment certificates
        </button>
        {open && (
          <ul className="">
            <li className="flex items-start text-[#444] mb-2 before:content-['\e904'] before:font-[icomoon] before:font-[900] before:inline-block before:text-orange before:text-2xl before:mr-4">
              Loans guaranteed by L.E. investment certificates: The customer may
              borrow against these certificates from any NBE branch in
              accordance with the applicable regulations and the interest rates
              in the date of borrowing.
            </li>
            <li className="flex items-start text-[#444] mb-2 before:content-['\e904'] before:font-[icomoon] before:font-[900] before:inline-block before:text-orange before:text-2xl before:mr-4">
              Loans guaranteed by L.E saving pools (certificates): The customer
              may borrow against these certificates from any NBE branch in
              accordance with the applicable regulations and the interest rates
              in the date of borrowing. .
            </li>
            <li className="flex items-start text-[#444] mb-2 before:content-['\e904'] before:font-[icomoon] before:font-[900] before:inline-block before:text-orange before:text-2xl before:mr-4">
              Loans guaranteed by L.E fixed deposits: The customer may borrow
              against these deposits from any NBE branch in accordance with the
              applicable regulations and the interest rates in the date of
              borrowing.
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Loans;
