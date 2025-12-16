import Main from "./Main";
import WithSalary from "./WithSalary";
import { useParams } from "react-router";
import  BreadCrumbs  from "../../../component/BreadCrumbs";
const withSalaryBreadCrumbs = [
  { title: "Retail", path: "" },
  { title: "Loans", path: "/loans" },
  { title: "Personal Cash Loan", path: "/loans/personal-loans/main" },
  { title: "With Salary/Installment Transfer", path: "" },
];
const mainBreadCrumbs = [
  { title: "Retail", path: "" },
  { title: "Loans", path: "/loans" },
  { title: "Personal Cash Loan", path: "" },
];
const PersonalLoans = () => {
  const {type} = useParams()
  const pages = {
    main: <Main />,
    withSalary: <WithSalary />,
  };
  const BreadCrumbsData = {
    main: mainBreadCrumbs,
    withSalary: withSalaryBreadCrumbs,
  };

  return (
    <div>
      <BreadCrumbs breadCrumbs={BreadCrumbsData[type]} />
      <img
        src="/images/loans/personal-cash-loan-ad.jpg"
        alt="personal Cash Loan advertising"
      />
      {pages[type]}
    </div>
  );
};

export default PersonalLoans;
