import React from "react";
const retailCustomers = [
  {
    body: "Mastercard World Elite and Visa Infinite credit cards",
    points: "2 points",
  },
  {
    body: "Mastercard World and Visa Signature credit cards",
    points: "1.75 points",
  },
  { body: "Platinum credit cards", points: "1.5 points" },
  { body: "Mastercard World Elite debit cards", points: "1.5 points" },
  { body: "Mastercard World debit cards", points: "1.25 points" },
  { body: "UEFA Champions League Mastercard credit cards", points: "1 point" },
  { body: "Titanium, Gold, and Classic credit cards", points: "1 point" },
  { body: "Platinum debit cards", points: "1 point" },
  { body: "Gold and Classic debit cards", points: "0.5 point" },
  { body: "University and remittance prepaid cards", points: "0.5 point" },
  {
    body: "Remittance cards (amounts in foreign currencies are converted to EGP)",
    points: "1 point",
  },
  {
    body: "USD Visa Platinum debit cards",
    points: "20 points for every 1 USD",
  },
  {
    body: "USD Visa Platinum Credit cards",
    points: "22 points for every 1 USD",
  },
];
const alAhlyNet = [
  {
    body: "Service activation",
    platinumElite: "1000 points",
    platinumPlus: "1000 points",
    platinum: "1000 points",
    "gold-Silver": "1000 points",
  },
  {
    body: "Opening a sub-account (maximum 6 sub-accounts)",
    platinumElite: "200 points",
    platinumPlus: "150 points",
    platinum: "100 points",
    "gold-Silver": "50 points",
  },
  {
    body: "Domestic transfers to accounts/cards (maximum 5 transfers monthly)",
    platinumElite: "200 points",
    platinumPlus: "150 points",
    platinum: "100 points",
    "gold-Silver": "50 points",
  },
  {
    body: "Transfers to e-wallets (maximum 3 transfers monthly)",
    platinumElite: "200 points",
    platinumPlus: "150 points",
    platinum: "100 points",
    "gold-Silver": "50 points",
  },
  {
    body: "Subscribing to the e-statement of account service (maximum 3 statements)",
    platinumElite: "200 points",
    platinumPlus: "150 points",
    platinum: "100 points",
    "gold-Silver": "50 points",
  },
  {
    body: "Card activation (maximum 2 cards annually)",
    platinumElite: "100 points",
    platinumPlus: "75 points",
    platinum: "50 points",
    "gold-Silver": "25 points",
  },
];
const Points = () => {
  return (
    <>
      <div className="flex items-center gap-2 bg-linear-to-r from-[#d1d1d1ff] from-25% via-[#f8f8f8ff] via-51% from-51% via-[#f8f8f8ff] via-75% to-[#d1d1d1ff] p-5">
        <a href="/">
          <img className="" src="/images/home-icon.svg" alt="" />
        </a>
        <span className="icon-keyboard_arrow_right text-4xl text-green"></span>
        <span className=""></span>
      </div>

      <img src="/images/alahly-points.jpg" alt="" />
      <div className="container mt-5">
        <div>
          <h2 className="text-xl font-bold text-orange text-center mb-4">
            Welcome to AL-AHLY Points program
          </h2>
          <p className="text-sm text-[#777] mb-2">
            Now with Al Ahly Points program you can earn points through:
          </p>
          <div className="mb-5">
            <h4 className="text-green text-2xl font-bold mb-2">
              1-Cards (Retail Customers)
            </h4>
            <p className="text-[#777] mb-3 text-sm">
              Upon the issuance of your Primary Debit Platinum card; 50,000
              welcome gift points are awarded to your Al Ahly Points account.
            </p>
            <p className="text-[#777] text-sm">
              Upon using your NBE Mastercard or Visa (credit, debit, or prepaid)
              card in purchases at all merchants inside Egypt or abroad
              (excluding merchants' installments, Fawry payments, purchases
              through Fawry POS, government payments, or loading NBE PhoneCash
              wallet).
            </p>
            <table className="w-full border-collapse border border-gray-400 text-center mt-5">
              <thead className="text-white bg-green">
                <tr>
                  <th className="p-2">Card Type</th>
                  <th className="p-2">Points per EGP</th>
                </tr>
              </thead>
              <tbody>
                {retailCustomers.map((item, i) => (
                  <tr className="odd:bg-gray-100 even:bg-gray-300" key={i}>
                    <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm md:text-md">
                      {item.body}
                    </td>
                    <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm">
                      {item.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-5">
            <h4 className="text-green text-2xl font-bold mb-2">
              2- Corporate/B2B Credit Card
            </h4>
            <p className="text-[#777] mb-3 text-sm">
              Points are earned when corporate credit cards are used in
              purchases at merchant stores inside Egypt or abroad. (excluding
              merchant installment purchases, Fawry payments, purchases through
              Fawry POS, government payments, and loading NBE PhoneCash wallet).
            </p>
            <p className="text-[#777] text-sm">
              Points are earned when B2B credit cards are used in purchases in
              local currency at participating merchant stores inside Egypt.
            </p>
            <table className="w-full border-collapse border border-gray-400 text-center mt-5">
              <thead className="text-white bg-green">
                <tr>
                  <th className="p-2">Card Type</th>
                  <th className="p-2">Points per EGP</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-gray-100 even:bg-gray-300 ">
                  <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm md:text-md">
                    Corporate credit cards
                  </td>
                  <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm">
                    1 point
                  </td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-300 ">
                  <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm md:text-md">
                    B2B corporate credit cards
                  </td>
                  <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm">
                    0.1 point
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-5">
            <h4 className="text-green text-2xl font-bold mb-2">
              3- Al Ahly Net/NBE Mobile (Retail Customers):
            </h4>
            <p className="text-[#777] mb-3 text-sm">
              Points are awarded upon activating & using your Al Ahly Net / NBE
              Mobile based on your segment as follows:
            </p>
            <table className="w-full border-collapse border border-gray-400 text-center mt-5">
              <thead className="text-white bg-green">
                <tr>
                  <th className="p-2"></th>
                  <th className="p-2">Platinum Elite</th>
                  <th className="p-2">Platinum Plus</th>
                  <th className="p-2">Platinum</th>
                  <th className="p-2">Gold – Silver</th>
                </tr>
              </thead>
              <tbody>
                {alAhlyNet.map((item, i) => (
                  <tr className="odd:bg-gray-100 even:bg-gray-300" key={i}>
                    <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm md:text-md">
                      {item.body}
                    </td>
                    <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm">
                      {item.platinumElite}
                    </td>
                    <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm">
                      {item.platinumPlus}
                    </td>
                    <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm">
                      {item.platinum}
                    </td>
                    <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm">
                      {item["gold-Silver"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-5">
            <h4 className="text-green text-2xl font-bold mb-2">
              4- NBE PhoneCash (Retail Customers):
            </h4>
            <p className="text-[#777] mb-3 text-sm">
              Points are awarded upon activating & using your NBE PhoneCash as
              follows:
            </p>
            <table className="w-full border-collapse border border-gray-400 text-center my-5">
              <thead className="text-white bg-green">
                <tr>
                  <th className="p-4"></th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-gray-100 even:bg-gray-300 ">
                  <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm md:text-md">
                    Service activation (maximum 1 wallet)
                  </td>
                  <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm">
                    1,000 points
                  </td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-300 ">
                  <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm md:text-md">
                    Online cards (maximum 2 cards monthly)
                  </td>
                  <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm">
                    20 points
                  </td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-300 ">
                  <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm md:text-md">
                    P2M (QR code payments)
                  </td>
                  <td className="border border-gray-300 px-2 md:px-5 py-3 text-sm">
                    1 point for every EGP
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm mb-3 text-[#777]">
              Earned points will expire after 36 months from the date on which
              points are earned and may not be redeemed by the customer.
            </p>
            <p className="text-sm mb-3 text-[#777]">
              You can redeem points earned in the form of:
            </p>
            <p className="text-[#777] text-sm mb-2">E-voucher:</p>
            <ul className="text-[#777] list-disc text-sm mb-3">
              <li className="ml-[30px] mb-1">
                An SMS will be sent to the retail customer's registered mobile
                number at NBE or the enterprise authorized signatory registered
                mobile number in case of the corporate credit card or B2B credit
                card. Such e-vouchers can be used at any participating merchant
                <a className="block">from Al Ahly Points merchants network</a>
              </li>
              <li className="ml-[30px] mb-1">
                Redemption can be done through Al Ahly Points website
                <a>"Click Here"</a> or by calling NBE call center at 19623
              </li>
              <li className="ml-[30px] mb-1">
                E-vouchers are issued in the local currency only.
              </li>
            </ul>
            <p className="text-[#777] text-sm mb-2">Cash rewards:</p>
            <ul className="text-[#777] list-disc text-sm mb-3">
              <li className="ml-[30px] mb-1">
                The cash reward will be credited in the local currency to any of
                your valid NBE credit card
              </li>
              <li className="ml-[30px] mb-1">
                Redemption can be done through <a>Al Ahly Points website</a>{" "}
                only .
              </li>
            </ul>
            <ul className="list-disc text-sm">
              <li className="mb-3">
                To view the FAQs <a>click here</a>
              </li>
              <li className="mb-3">Terms and conditions apply</li>
              <li className="ml-[35px] mb-3">
                <a href="">Terms and Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Points;
