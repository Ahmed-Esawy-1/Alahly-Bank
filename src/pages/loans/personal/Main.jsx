// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const loansType = [
  {
    imgPath: "15f9116c-4259-4999-8457-1780e9db85e9.svg",
    body: "With Salary/Installment Transfer",
    path: "withSalary",
  },
  {
    imgPath: "abd113a7-b084-49c5-9a17-0b84cd75f5d2.svg",
    body: "Without Salary / Installment Transfer",
    path: "",
  },
  {
    imgPath: "15f9116c-4259-4999-8457-1780e9db85e9.svg",
    body: "Business owners and self-employed",
    path: "",
  },
  {
    imgPath: "15f9116c-4259-4999-8457-1780e9db85e9.svg",
    body: "Pensioners",
    path: "",
  },
  {
    imgPath: "15f9116c-4259-4999-8457-1780e9db85e9.svg",
    body: "Surrogate Income Programs",
    path: "",
  },
];
const Main = () => {
  return (
    <div>
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
          <SwiperSlide key={i} className="mb-[60px]">
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

              <button className="block w-fit ml-auto">
                <a
                  className="block bg-green text-white rounded-lg px-[50px] py-[5px] cursor-pointer"
                  href={loan.path}
                >
                  Find More
                </a>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Main;
