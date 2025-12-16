import { useState } from "react";
import Exchange from "./Exchange";
import Converter from "./Converter"  
import BreadCrumbs from "../../component/BreadCrumbs";
const rates = [
  { id: 1, title: "Exchange rate ( EGP )", imgPath: "exchange rate.png" },
  { id: 2, title: "Currency converter", imgPath: "currency converter.png" },
];

const exchangeRatesBreadCrumbs = [{ title: "Exchange Rates And Currency Converter", path: "" }];

const ExchangeRates = () => {
  const [content, setContent] = useState(1);

  return (
    <div>
      <BreadCrumbs breadCrumbs={exchangeRatesBreadCrumbs} />
      <div className="bg-[url(/images/title%20image/exchange-rates.jpg)] bg-cover flex items-end justify-center min-h-[250px]">
        {rates.map((item) => (
          <div
            className={`flex items-center gap-4 text-white text-md md:text-2xl font-bold p-5 cursor-pointer ${
              content == item.id ? "bg-orange" : "bg-[#444444]"
            }`}
            onClick={() => {
              setContent(item.id);
            }}
            key={item.id}
          >
            <img
              className="hidden md:block"
              src={`/images/${item.imgPath}`}
              alt={item.title}
            />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
      {content == 1 ? <Exchange /> : <Converter />}
    </div>
  );
};

export default ExchangeRates;
