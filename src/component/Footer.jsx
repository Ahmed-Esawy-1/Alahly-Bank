import "./footer.css";
const speedServices = [
  {
    iconName: "place",
    title: "ATM Locations",
    path: "/atm_locations",
  },
  { iconName: "help_outline", title: "FAQ", path: "/faq" },
  {
    iconName: "stars",
    title: "Al Ahaly Points",
    path: "/alahly-points",
  },
  { iconName: "language", title: "Al Ahaly Net", path: "/alahly-net" },
  { iconName: "report_problem", title: "Follow up your request", path: "" },
  {
    iconName: "currency_exchange",
    title: "Exchange Rates",
    path: "exchange_rates",
  },
];

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-orange">
        <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/20 border-b border-white/20">
          {speedServices.map((service, i) => (
            <a
              href={service.path}
              className="py-6 px-4 flex flex-col items-center justify-center text-center text-white  hover:bg-white/10 transition-colors cursor-pointer group"
              key={i}
            >
              <span className="material-icons text-3xl mb-2 group-hover:scale-110 transition-transform">
                {service.iconName}
              </span>
              <span className="text-sm font-semibold">{service.title}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="container m-auto hidden md:block py-5 px-3">
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-2">
          <ul className="links">
            <h3 className="text-orange text-lg font-bold mb-2">
              I Want To ...
            </h3>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                Purchase a Certificate
              </a>
            </li>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                Apply for a Credit Card
              </a>
            </li>
            <li className="py-1">
              <a className="text-muted text-sm" href="/loans">
                Apply for a Loan
              </a>
            </li>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                Financing P.O.S merchants
              </a>
            </li>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                Pay Taxes & University Fees
              </a>
            </li>
          </ul>
          <ul className="links">
            <h3 className="text-orange text-lg font-bold mb-2">Services</h3>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                Securities
              </a>
            </li>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                E-Collection of Gov Dues
              </a>
            </li>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                Investment Trustees
              </a>
            </li>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                Bancassurance
              </a>
            </li>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                NBE Merchant Hub
              </a>
            </li>
          </ul>
          <ul className="links">
            <h3 className="text-orange text-lg font-bold mb-2">Shortcuts</h3>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                Exchange Rates
              </a>
            </li>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                Prizes
              </a>
            </li>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                SMEs
              </a>
            </li>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                Fees And Charges
              </a>
            </li>
            <li className="py-1">
              <a className="text-muted text-sm" href="">
                Electronic Remittances Agents
              </a>
            </li>
          </ul>
          <div>
            <h3 className="text-orange text-lg font-bold mb-2">Contact</h3>
            <div className="">
              <div className="mb-3">
                <h4 className="text-title font-bold">Head Office</h4>
                <address className="text-muted text-sm">
                  NBE Tower, 1187 Corniche El Nile St., Boulak, Cairo, Egypt
                </address>
              </div>
              <div className="mb-3">
                <h4 className="text-title font-bold">Call Us</h4>
                <p className="text-muted text-sm">
                  <span className="block">Locally: 19623</span>
                  <span>Internationally: 0020219623 / 0020225941200</span>
                </p>
              </div>
              <div className="">
                <h4 className="text-title font-bold mb-2">Let's Socialize</h4>
                <div className="flex space-x-3 mt-2">
                  <a
                    className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-80"
                    href="#"
                  >
                    <span className="material-icons text-sm">facebook</span>
                  </a>
                  <a
                    className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white hover:opacity-80"
                    href="#"
                  >
                    <span className="material-icons text-sm">camera_alt</span>
                  </a>
                  <a
                    className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white hover:opacity-80"
                    href="#"
                  >
                    <span className="material-icons text-sm">chat</span>
                  </a>
                  <a
                    className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:opacity-80"
                    href="#"
                  >
                    <span className="material-icons text-sm">play_arrow</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange text-white text-center font-bold p-3">
        &copy; National Bank Of Egypt
      </div>
    </footer>
  );
};

export default Footer;
