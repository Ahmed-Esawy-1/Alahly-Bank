import i18n from "i18next";
import { useState, useEffect } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  const items = [
    {
      id: 1,
      title: "I Want To ...",
      children: [
        {
          title: "Purchase a Certificate",
          path: "",
        },
        { title: "Apply for a Credit Card", path: "" },
        { title: "Apply for a Loan", path: "/loans" },
        { title: "Financing P.O.S merchants", path: "" },
        { title: "Financing Pay Taxes & University Fees", path: "" },
      ],
    },
    {
      id: 2,
      title: "Services",
      children: [
        {
          title: "Securities",
          path: "",
        },
        { title: "E-Collection of Gov Dues", path: "" },
        { title: "Investment Trustees", path: "" },
        { title: "Bancassurance", path: "" },
        { title: "NBE Merchant Hub", path: "" },
      ],
    },
    {
      id: 3,
      title: "Shortcuts",
      children: [
        {
          title: "Exchange Rates",
          path: "",
        },
        { title: "Prizes", path: "" },
        { title: "SMEs", path: "" },
        { title: "Fees And Charges", path: "" },
        { title: "Electronic Remittances Agents & Correspondents", path: "" },
      ],
    },
    {
      id: 4,
      title: "Useful links",
      children: [
        {
          title: "Careers",
          path: "",
        },
        { title: "Mobile Bill Payment", path: "" },
        { title: "Donation", path: "" },
        { title: "Ahly Discount & Installment Offers", path: "" },
        { title: "Consumer Protection", path: "" },
      ],
    },
    {
      id: 5,
      title: "Others",
      children: [
        {
          title: "Sitemap",
          path: "",
        },
        { title: "Newsroom", path: "" },
        { title: "Research", path: "" },
        { title: "Corresp., Agents & Foreign Units", path: "" },
        { title: "Tenders", path: "" },
      ],
    },
  ];

  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      [id]: !prev[id],
    }));
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <>
      <div className="bg-white text-xs sm:text-sm border-b border-gray-200 py-2">
        <div className="max-w-7xl flex flex-col sm:flex-row justify-end items-center space-y-2 sm:space-y-0 sm:space-x-6 px-4 sm:px-6 lg:px-8 mx-auto">
          <nav className="flex space-x-4 text-muted">
            <a className="hover:text-green transition-colors" href="#">
              Homepage
            </a>
            <a className="hover:text-green transition-colors" href="#">
              About Us
            </a>
            <a className="hover:text-green transition-colors" href="#">
              Sustainability
            </a>
            <a className="hover:text-green transition-colors" href="#">
              Careers
            </a>
            <a
              className="hover:text-green transition-colors"
              href="/contact-us"
            >
              Contact Us
            </a>
            <button
              className="font-bold text-green"
              href="#"
              onClick={() => {
                const newLang = i18n.language === "en" ? "ar" : "en";
                i18n.changeLanguage(newLang);
              }}
            >
              <span className="text-green text-sm font-bold">
                {i18n.language === "en" ? "عربي" : "EN"}
              </span>
            </button>
          </nav>
          <div className="relative w-full sm:w-auto">
            <input
              className="w-full sm:w-48 bg-gray-100 border-none rounded-full py-1 pl-4 pr-10 text-xs focus:ring-2 focus:ring-green"
              placeholder="Search"
              type="text"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green">
              <span className="icon-search text-sm">search</span>
            </button>
          </div>
        </div>
      </div>
      {/* SideBar In Small Screen */}
      <div
        className={`absolute top-0 h-screen w-full bg-white overflow-y-auto z-150 duration-400 ${
          open ? "left-[0px]" : "left-[-100%]"
        }`}
      >
        <div className="bg-green flex items-center justify-between  p-2">
          <div className="flex flex items-center gap-5">
            <img
              className="w-10 h-10 rounded-full bg-white"
              src="/images/mini-logo.svg"
              alt=""
            />
            <div className="text-white">
              <h2 className="text-lg font-bold">Main Menu</h2>
              <p className="text-sm opacity-80">Navigate Your finances</p>
            </div>
          </div>
          <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full mr-5">
            <span
              className="material-symbols-outlined !text-2xl text-red-800 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              close
            </span>
          </button>

        </div>
        <ul className="border-b-2 border-[#eee] py-5 pl-5">
          <label className="text-sm font-bold text-green uppercase tracking-wider">
            Information
          </label>
          <li className="">
            <a className="block p-3 hover:bg-[#eee]" href="">
              About Us
            </a>
          </li>
          <li className="">
            <a className="block p-3 hover:bg-[#eee]" href="">
              Sustainability
            </a>
          </li>
          <li className="">
            <a className="block p-3 hover:bg-[#eee]" href="">
              Exchange Rate
            </a>
          </li>
          <li className="">
            <a className="block p-3 hover:bg-[#eee]" href="">
              Become An NBE Customer
            </a>
          </li>
          <li className="">
            <a className="block p-3 hover:bg-[#eee]" href="">
              Financing P.O.S merchants
            </a>
          </li>
          <li className="">
            <a className="block p-3 hover:bg-[#eee]" href="/contact-us">
              Contact Us
            </a>
          </li>
          <li className="">
            <a className="block p-3 hover:bg-[#eee]" href="">
              Mobile Bill Payments
            </a>
          </li>
        </ul>
        <ul className="border-b-2 border-[#eee] p-5">
          {items.map((item) => (
            <li key={item.id} className="py-2 rounded">
              <div className="flex items-center justify-between">
                <span
                  className={openItems[item.id] ? "text-green font-bold" : null}
                >
                  {item.title}
                </span>

                <button
                  onClick={() => toggleItem(item.id)}
                  className={`text-green text-4xl rounded cursor-pointer`}
                >
                  <span className="material-symbols-outlined">
                    {openItems[item.id] ? "arrow_drop_up" : "arrow_drop_down"}
                  </span>
                </button>
              </div>

              <ul
                className={`ml-4 border-l-2 border-green pl-4 transition-all duration-300 grid
              ${
                openItems[item.id]
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
              >
                <div className="overflow-hidden">
                  {item.children.map((child, i) => (
                    <li key={i} className=" ">
                      <a
                        className="block hover:bg-[#eee] p-3"
                        href={child.path}
                      >
                        {child.title}
                      </a>
                    </li>
                  ))}
                </div>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">
                  N
                </div>
                <div className="flex flex-col">
                  <span className="text-green font-bold text-lg leading-tight uppercase tracking-tight">
                    National Bank
                  </span>
                  <span className="text-orange font-semibold text-sm leading-tight uppercase tracking-widest">
                    Of Egypt
                  </span>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <a
                className="group flex flex-col items-center text-center p-2 rounded-lg hover:bg-gray-50 transition-all"
                href="#"
              >
                <span className="material-icons text-orange text-2xl mb-1 group-hover:scale-110 transition-transform">
                  person
                </span>
                <span className="text-sm font-medium text-title  group-hover:text-green">
                  Retail
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-2 rounded-lg hover:bg-gray-50 transition-all"
                href="#"
              >
                <span className="material-icons text-orange text-2xl mb-1 group-hover:scale-110 transition-transform">
                  apartment
                </span>
                <span className="text-sm font-medium text-title  group-hover:text-green">
                  Corporate
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-2 rounded-lg hover:bg-gray-50 transition-all"
                href="#"
              >
                <span className="material-icons text-orange text-2xl mb-1 group-hover:scale-110 transition-transform">
                  storefront
                </span>
                <span className="text-sm font-medium text-title  group-hover:text-green">
                  SMEs
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-2 rounded-lg hover:bg-gray-50 transition-all"
                href="#"
              >
                <span className="material-icons text-orange text-2xl mb-1 group-hover:scale-110 transition-transform">
                  diamond
                </span>
                <span className="text-sm font-medium text-title  group-hover:text-green">
                  Platinum
                </span>
              </a>
              <a
                className="group flex flex-col items-center text-center p-2 rounded-lg hover:bg-gray-50 transition-all"
                href="#"
              >
                <span className="material-icons text-green text-2xl mb-1 group-hover:scale-110 transition-transform">
                  laptop_mac
                </span>
                <span className="text-sm font-medium text-title  group-hover:text-green">
                  Self Services
                </span>
              </a>
            </nav>
            <div className="md:hidden flex items-center">
              <button className="text-gray-500 hover:text-green focus:outline-none">
                <span
                  className="material-icons text-3xl"
                  onClick={() => setOpen(!open)}
                >
                  menu
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
