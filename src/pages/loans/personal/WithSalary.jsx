import { useState } from "react";
import LoanCard from "../../../component/LoanCard";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const WithSalary = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-[50px] container ">
      <Swiper
        spaceBetween={10}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          650: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          950: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide className="flex mb-[50px]">
          <LoanCard
            title="Governmental & Public Sector Employees"
            year={12}
            amount={"3,000,000"}
          />
        </SwiperSlide>
        <SwiperSlide className="flex mb-[50px]">
          <LoanCard
            title="Governmental & Public Sector Employees"
            year={12}
            amount={"3,000,000"}
          />
        </SwiperSlide>
        <SwiperSlide className="flex mb-[50px]">
          <LoanCard
            title="Governmental & Public Sector Employees"
            year={12}
            amount={"3,000,000"}
          />
        </SwiperSlide>
      </Swiper>
      <div className="mt-[40px]">
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
          Terms and Conditions
        </button>
        {open && (
          <div className="w-[70%] mx-auto mt-[40px]">
            <a className="flex items-center gap-3 text-[#444]  border-2 border-orange rounded-md p-3" href="">
              <img className="w-5" src="/images/loans/pdf2.png" alt="" />
              Terms and Conditions
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithSalary;