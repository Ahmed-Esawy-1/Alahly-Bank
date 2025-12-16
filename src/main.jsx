import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
// import "./i18n.js";
import App from "./App.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Home from "./pages/Home.jsx";
import Loans from "./pages/loans/Loans.jsx";
import SelfServices from "./pages/self services/SelfServices.jsx";
import PersonalLoans from "./pages/loans/personal/PersonalLoans.jsx";
import AutoLoan from "./pages/loans/AutoLoan.jsx";
import Faq from "./pages/faq/Faq.jsx";
import ExchangeRates from "./pages/exchangeRates/ExchangeRates.jsx";
import ATMLocations from "./pages/locations/ATMLocations.jsx";
import Points from "./pages/alahlyPoints/Points.jsx";
import Net from "./pages/alhalyNet/Net.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="loans">
          <Route index element={<Loans />} />
          <Route path="personal-loans/:type" element={<PersonalLoans />} />
          <Route path="auto-loan" element={<AutoLoan />} />
        </Route>
        <Route path="self-services" element={<SelfServices />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="atm_locations" element={<ATMLocations />} />
        <Route path="faq" element={<Faq />} />
        <Route path="alahly-points" element={<Points />} />
        <Route path="alahly-net" element={<Net />} />
        <Route path="exchange_rates" element={<ExchangeRates />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
