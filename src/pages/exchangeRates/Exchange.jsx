import { useEffect, useState } from "react";
import axios from "axios";

const Exchange = () => {
  const [rates, setRates] = useState([]);
  useEffect(() => {
    async function getRates() {
      try {
        const res = await axios.get("https://open.er-api.com/v6/latest/EGP");
        const allRates = res.data.rates;
        const result = [
          {
            title: "US DOLLAR",
            price: allRates.USD,
            imgPath: "img-USD.png",
            baknote: true,
            transfer: true,
          },
          {
            title: "EURO",
            price: allRates.EUR,
            imgPath: "img-EUR.png",
            baknote: true,
            transfer: true,
          },
          {
            title: "POUND STERLING",
            price: allRates.GBP,
            imgPath: "img-GBP.png",
            baknote: true,
            transfer: true,
          },
          {
            title: "CANADIAN DOLLAR",
            price: allRates.CAD,
            imgPath: "img-CAD.png",
            baknote: true,
            transfer: true,
          },
          {
            title: "DANISH Krone",
            price: allRates.DKK,
            imgPath: "img-DKK.png",
            baknote: false,
            transfer: true,
          },
          {
            title: "NORWEGIAN KRONE",
            price: allRates.NOK,
            imgPath: "img-NOK.png",
            baknote: false,
            transfer: true,
          },
          {
            title: "Swedish Krona",
            price: allRates.SEK,
            imgPath: "img-SEK.jpg",
            baknote: false,
            transfer: true,
          },
          {
            title: "SWISS FRANC",
            price: allRates.CHF,
            imgPath: "img-CHF.png",
            baknote: true,
            transfer: true,
          },
          {
            title: "YENS(100)",
            price: allRates.JPY,
            imgPath: "img-JPY.png",
            baknote: true,
            transfer: true,
          },
          {
            title: "AUSTRALIAN DOLLARS",
            price: allRates.AUD,
            imgPath: "img-AUD.png",
            baknote: true,
            transfer: true,
          },
          {
            title: "Kuwait DINAR",
            price: allRates.KWD,
            imgPath: "img-KWD.png",
            baknote: true,
            transfer: true,
          },
          {
            title: "SAUDI RIALS",
            price: allRates.SAR,
            imgPath: "img-SAR.png",
            baknote: true,
            transfer: true,
          },
          {
            title: "U.A.E DIRHAM",
            price: allRates.AED,
            imgPath: "img-AED.png",
            baknote: true,
            transfer: true,
          },
          {
            title: "BAHRAIN DINAR",
            price: allRates.BHD,
            imgPath: "img-BHD.png",
            baknote: true,
            transfer: false,
          },
          {
            title: "OMANI RIAL",
            price: allRates.OMR,
            imgPath: "img-OMR.png",
            baknote: true,
            transfer: false,
          },
          {
            title: "QATAR RIAL",
            price: allRates.QAR,
            imgPath: "img-QAR.png",
            baknote: true,
            transfer: false,
          },
          {
            title: "JORDAN DINAR",
            price: allRates.JOD,
            imgPath: "img-JOD.png",
            baknote: true,
            transfer: false,
          },
          {
            title: "Chinese Yuan",
            price: allRates.CNY,
            imgPath: "img-CNY.png",
            baknote: false,
            transfer: true,
          },
        ];
        setRates(result);
      } catch (err) {
        console.error(err);
      }
    }
    getRates();
  }, []);

  return (
    <div>
      <table className="container border-collapse border border-gray-400 mt-5">
        <thead>
          <tr className="text-white bg-green">
            <th className="p-1">Currency</th>
            <th className="p-1">Banknote rate</th>
            <th className="p-1">Transfer rate</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate, i) => (
            <tr className="odd:bg-gray-100 even:bg-gray-300" key={i}>
              <td className="text-center border border-gray-300 px-5 py-3">
                <img
                  className="w-10 m-auto mb-2"
                  src={`/images/countries flags/${rate.imgPath}`}
                  alt=""
                />
                <span>{rate.title}</span>
              </td>
              <td className="text-sm border border-gray-300 px-5 py-3">
                <div className="flex justify-center gap-4 mb-2">
                  <span className="block font-bold  mb-1">Buy</span>
                  <span>{rate.baknote ? (1 / rate.price).toFixed(4) : 0}</span>
                </div>
                <div className="flex justify-center gap-4">
                  <span className="font-bold">Sell</span>
                  <span>
                    {rate.baknote
                      ? (1 / rate.price + 0.005 / rate.price).toFixed(4)
                      : 0}
                  </span>
                </div>
              </td>
              <td className="text-sm border border-gray-300 px-5 py-3">
                <div className="flex justify-center gap-4 mb-2">
                  <span className="block font-bold mb-1">Buy</span>
                  <span>{rate.transfer ? (1 / rate.price).toFixed(4) : 0}</span>
                </div>
                <div className="flex justify-center gap-4">
                  <span className="font-bold">Sell</span>
                  <span>
                    {rate.transfer
                      ? (1 / rate.price + 0.005 / rate.price).toFixed(4)
                      : 0}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exchange;
