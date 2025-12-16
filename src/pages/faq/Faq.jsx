import  { useState } from "react";
import CreditCards from "./CreditCards";
import Loans from "./Loans";
import Accounts from "./Accounts";
import DebitCards from "./DebitCards";
import BreadCrumbs from "../../component/BreadCrumbs";
const faq = [
  {
    id: 1,
    title: "FAQs",
  },
  {
    id: 2,
    title: "Credit Cards",
  },
  {
    id: 3,
    title: "Loans",
  },
  {
    id: 4,
    title: "Accounts",
  },
  {
    id: 5,
    title: "Debit cards",
  },
];

const faqBreadCrumbs = [
  { title: "FAQs", path: "" },
];
const Faq = () => {
  const [content, setContent] = useState({ id: 1, title: "FAQs" });
  function handleContent(id) {
    switch (id) {
      case 1:
        return (
          <div className="flex gap-5 border-3 border-orange p-2 text-center">
            <p>
              How can I get the SWIFT code of the branch maintaining my account?
            </p>
            <p>
              You can inquire about the SWIFT code via visiting
              <a href="">this link</a>
            </p>
          </div>
        );
      case 2:
        return <CreditCards />;
      case 3:
        return <Loans />;
      case 4: 
        return <Accounts />;
      case 5:
        return <DebitCards />;
    }
  }
  return (
    <div>
      <BreadCrumbs breadCrumbs={faqBreadCrumbs} />
      <img className="mb-5" src="/images/title image/faq.jpg" alt="" />
      <div className="my-[50px]">
        <div className="container flex flex-col md:flex-row gap-5">
          <ul className="text-white min-w-64 cursor-pointer">
            {faq.map((item, i) => (
              <li
                className={`bg-green-700 hover:bg-orange border-b-3 border-white p-4 duration-400 ${
                  item.title === "FAQs" ? "rounded-tr-[50px]" : null
                } ${content.id == item.id ? "bg-orange" : null}`}
                key={i}
                onClick={() => setContent({ ...item })}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="flex-1">
            <h4 className="bg-green text-white text-center mb-3 p-2">
              {content.id == 1 ? "General Information" : content.title}
            </h4>
            {handleContent(content.id)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
