// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./home.css";
import Video from "../component/YoutubeVideo";
const quickActions = [
  {
    imgPath: "person.svg",
    title: "Become An NBE ",
    subTitle: "Customer",
    path: "",
  },
  {
    imgPath: "self.svg",
    title: "Self Services",
    subTitle: "Quick Access",
    path: "self-services",
  },
  {
    imgPath: "credit.svg",
    title: "Credit Cards",
    subTitle: "Applay Now",
    path: "",
  },
  {
    imgPath: "loans.svg",
    title: "Personal Loans",
    subTitle: "Get Financed",
    path: "loans/personal-loans/main",
  },
  {
    imgPath: "auto-loans.svg",
    title: "Auto Loans",
    subTitle: "Easy Financing",
    path: "",
  },
  {
    imgPath: "certificates.svg",
    title: "Certificates",
    subTitle: "High Returns",
    path: "",
  },
];

const imgSlider = [
  {
    imgPath: "bank1.jpg",
    href: "",
  },
  {
    imgPath: "bank2.jpg",
    href: "",
  },
  {
    imgPath: "bank3.jpg",
    href: "",
  },
  {
    imgPath: "bank4.jpg",
    href: "",
  },
  {
    imgPath: "bank5.jpg",
    href: "",
  },
  {
    imgPath: "bank6.jpg",
    href: "",
  },
];
const notes = [
  { body: "A note about using NBE cards", href: "" },
  { body: "A Note About Banking Tariffs Update", href: "" },
  {
    body: "Thirty NBE branches are open daily from 5:00 pm to 9:00 pm",
    href: "",
  },
  { body: "Updates On Credit Cards International Utilization", href: "" },
  { body: "Updates On Debit Cards International Usage Parameters", href: "" },
  {
    body: "A Note To Holders of National Bank Of Egypt Mutual Fund Certificates",
    href: "",
  },
  {
    body: "Important Information Update Notice to Customers",
    href: "",
  },
  {
    body: "Group 'C' Certificates Draw Announcement",
    href: "",
  },
  {
    body: "Important Notice",
    href: "",
  },
  {
    body: "A Note About E-statements of Account Service",
    href: "",
  },
];
const NBE_Services = [
  {
    title: "NBE NET",
    body: "This online banking platform provides customers with convenientand secure banking services tailored to meet their needs",
    imgPath: "services1.svg",
  },
  {
    title: "NBE Mobile",
    body: "NBE Mobile offers a state-of-the-art, accessible, and secured banking experience. Our array of cutting-edge banking services can be processed anywhere anytime.",
    imgPath: "services2.svg",
  },
  {
    title: "NBE Phone Cash",
    body: "This service allows customers to transfer money, pay bills, recharge balance, and deposit/withdraw cash using their phones. ",
    imgPath: "services3.svg",
  },
  {
    title: "NBE E-Branch",
    body: "This innovative banking model provides access to banking services outside the traditional model of a bank teller, and is part of NBE’s digitalization strategy.",
    imgPath: "services4.svg",
  },
  {
    title: "NBE E-Shopping",
    body: "This service allows customers to buy products or pay for services on commercial websites.",
    imgPath: "services5.svg",
  },
  {
    title: "NBE Points",
    body: "When you pay with our cards, you gather points that you can redeem from many brands and stores.",
    imgPath: "services6.svg",
  },
];

const Home = () => {
  return (
    <div className="min-h-[100vh]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
      >
        {imgSlider.map((item, i) => (
          <SwiperSlide key={i}>
            <a className="block">
              <img
                className="w-full"
                src={`/images/title image/${item.imgPath}`}
                alt=""
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Quick Access */}
      <Swiper
        breakpoints={{
          650: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          950: { slidesPerView: 3 },
          1300: { slidesPerView: 4 },
        }}
        className="bg-orange/10 border-y border-orange/20"
      >
        {quickActions.map((action, i) => (
          <SwiperSlide key={i} className="border-l border-orange/20">
            <div className="px-3 py-2 md:px-6 md:py-4 flex items-center justify-between group hover:bg-orange/20 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <img className="w-8 h-8" src={`/images/${action.imgPath}`} />
                <div>
                  <h3 className="font-bold text-green text-md uppercase">
                    {action.title}
                  </h3>
                  <p className="text-muted text-sm">{action.subTitle}</p>
                </div>
              </div>
              <button>
                <a
                  className="bg-green text-white text-sm hover:bg-green-900 rounded-md px-3 py-2 duration-300"
                  href={action.path}
                >
                  More
                </a>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Notes */}
      <Swiper
        spaceBetween={0}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="bg-background-[#f8fafc] mb-[50px]"
      >
        {notes.map((item, i) => (
          <SwiperSlide key={i} className="px-5 pt-[50px] ">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative min-h-[350px] flex items-center">
              <img
                alt="Newspaper and coffee"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                src="/images/title image/notes.png"
              />
              <div className="relative z-10 p-8 md:p-12 w-full md:w-2/3">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    className="w-12 h-12 rounded flex items-center justify-center"
                    src="/images/mini-logo.svg"
                    alt=""
                  />
                  <h2 className="text-2xl md:text-3xl font-bold text-green">
                    {item.body}
                  </h2>
                </div>
                <p className="text-muted mb-6 text-lg">
                  Important security updates and usage guidelines for all
                  cardholders to ensure safe transactions worldwide.
                </p>
                <button className="bg-green text-white px-6 py-2 rounded-lg hover:bg-green-700 transition shadow-md font-semibold">
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NBE Services */}
      <section className="py-8 bg-grey-50">
        <div className="container m-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-green mb-4">
              NBE Digital Services
            </h2>
            <div className="h-1 w-25 bg-orange mx-auto rounded-full"></div>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            className="items-stretch"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {NBE_Services.map((service, i) => (
              <SwiperSlide key={i} className="mb-[60px] !h-auto flex">
                <div
                  className="p-5 bg-white border border-gray-100 rounded-xl shadow-lg
                      flex flex-col h-full w-full"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                      <img
                        className="w-15 h-15"
                        src={`/images/NBE services/${service.imgPath}`}
                      />
                    </div>
                  </div>
                  <h3 className="text-title text-xl font-bold text-center mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm text-center leading-relaxed flex-grow mb-3">
                    {service.body}
                  </p>
                  <div className="text-center mt-auto">
                    <a
                      className="inline-block px-6 py-2 border-2 border-green text-green
                        font-semibold rounded-lg duration-500 hover:bg-green hover:text-white cursor-pointer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-white py-8">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-green mb-4">
              Get To Know Our Digital Banking Services
            </h2>
            <div className="h-1 w-60 bg-orange mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Video videoId="ktlvorTf0F8" />
            <Video videoId="UFcjNpPFRdY" />
            <Video videoId="933_es3XvXA" />
            <Video videoId="MT4aCEgYLiE" />
          </div>
        </div>
      </section>

      {/* Magazine */}
      <section className="">
        <div className="w-full h-64 md:h-80 relative overflow-hidden group cursor-pointer">
          <img
            alt="Person reading magazine"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="/images/title image/magazine.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-12">
            <div className="text-center px-4">
              <h2 className="text-white text-3xl md:text-5xl font-serif font-bold drop-shadow-md mb-2">
                National Bank of Egypt's Magazine
              </h2>
              <p className="text-gray-200 text-lg">
                Insights, trends, and financial news.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
