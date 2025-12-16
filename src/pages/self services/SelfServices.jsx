import BreadCrumbs from "../../component/BreadCrumbs";

const selfServicesBreadCrumbs = [
  { title: "Self Services", path: "" },
];

const SelfServices = () => {
  const services = [
    {
      imgPath: "appointment_booking.svg",
      title: "Branch Appointment Booking",
      body: "Schedule your visit to any of our branches in advance.",
      path: "",
    },

    {
      imgPath: "ipn.svg",
      title: "Instant Payment Network (IPN)",
      body: "Instantly transfer funds between different bank accounts.",
      path: "",
    },
    {
      imgPath: "appointment_with_sme.svg",
      title: "SME Business Appointment",
      body: "Book a meeting with a Small &amp; Medium Enterprise specialist.",
      path: "",
    },

    {
      imgPath: "personal_cash.svg",
      title: "Personal Cash Loan",
      body: "Request a personal loan against your Al Ahly Plus certificate.",
      path: "",
    },
    {
      imgPath: "chequebook.svg",
      title: "ChequeBook Request",
      body: "Request a new chequebook for your retail account.",
      path: "",
    },
    {
      imgPath: "nbe_customer.svg",
      title: "Become a Customer",
      body: "Start your journey with us by opening a new account.",
      path: "",
    },
    {
      imgPath: "mutual_funds.svg",
      title: "Mutual Funds Inquiry",
      body: "Inquire about our mutual funds and manage your investments.",
      path: "",
    },
    {
      imgPath: "electronic_statements.svg",
      title: "E-Statements Subscription",
      body: "Subscribe to electronic statements for your accounts or cards.",
      path: "",
    },
    {
      imgPath: "foreign_remittances.svg",
      title: "Foreign Remittances Inquiry",
      body: "Inquire about incoming electronic foreign remittances.",
      path: "",
    },
    {
      imgPath: "email.svg",
      title: "Update Email / Delivery",
      body: "Update your contact email or delivery branch service.",
      path: "",
    },
    {
      imgPath: "nbe_customer.svg",
      title: "IBAN Inquiries",
      body: "Retrieve your International Bank Account Number (IBAN).",
      path: "",
    },
    {
      imgPath: "new_installment.svg",
      title: "New Installment Amount",
      body: "Check your new installment amount after deferment.",
      path: "",
    },
    {
      imgPath: "nbe_phone_cash.svg",
      title: "PhoneCash Self-Registration",
      body: "Register for our PhoneCash service from the comfort of your home.",
      path: "",
    },
    {
      imgPath: "nbe_customer.svg",
      title: "i-score Inquiry Service",
      body: "Check your credit score and financial standing instantly.",
      path: "",
    },
  ];
  return (
    <>
      <BreadCrumbs breadCrumbs={selfServicesBreadCrumbs} />
      <div className="container my-[50px]">
        <div className="bg-orange-100/50 border-l-4 border-orange p-6 rounded-lg mb-12">
          <h2 className="font-bold text-2xl text-orange-800 mb-2">
            Dear Customer,
          </h2>
          <p className="text-orange-700 leading-relaxed">
            If you see a message requesting you to update your information while
            using self-service, we are pleased to welcome you at any NBE branch
            to update your information, in order to maintain the service(s).
            Some banking services will be stopped after three months from the
            date on which you are required to update your information. Please
            note that the Bank does not request any personal or banking
            information over the phone or via text messages.
            <br />
            To find which services will be suspended, please visit the following
            link:
            <a
              className="block font-semibold underline hover:text-orange-600 transition-colors"
              href="#"
            >
              "Important Information Update Notice to Customers"
            </a>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#e2e8f0]"
              key={i}
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <img
                  className="w-full h-full rounded-full"
                  src={`/images/self services/${service.imgPath}`}
                />
              </div>
              <h3 className="font-bold text-lg text-orange mb-2">
                {service.title}
              </h3>
              <p className="text-sm flex-grow mb-4 text-[#475569]">
                {service.body}
              </p>
              <button className="w-full bg-green text-white font-bold rounded-md duration-400 hover:bg-green-900 transition-colors py-2 px-4 cursor-pointer">
                More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelfServices;
