import { useEffect } from "react";
import { Outlet } from "react-router";
import "./i18n.js";
import i18n from "i18next";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Footer from "./component/Footer";

function App() {
  useEffect(() => {
    const updateDir = () => {
      document.documentElement.dir = i18n.dir();
    };

    updateDir();

    i18n.on("languageChanged", updateDir);

    return () => {
      i18n.off("languageChanged", updateDir);
    };
  }, []);
  return (
    <div>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
