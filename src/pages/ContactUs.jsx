import React, { useState } from "react";
const initial = Math.round(Math.random() * 999998);
const ContactUs = () => {
  const  generateNumberCheck = () => Math.round(Math.random() * 999998)

  const [numberCheck, setNumberCheck] = useState(initial);
  return (
    <div>
      <h2 className="bg-orange text-white text-2xl text-center font-bold p-2">
        Contact Us
      </h2>
      <div className="w-full md:w-[80%] mx-auto bg-white border-t-5 border-orange rounded-md shadow my-8">
        <form className="p-6 md:p-10 space-y-10">
          <section>
            <div className="border-b-2 border-gray-200 pb-2 mb-6">
              <h2 className="text-green text-xl font-bold">Recipient</h2>
            </div>
            <div className="grid grid grid-cols-1 md:grid-cols-2">
              <div className="relative group">
                <select className="w-full bg-gray-50 text-gray-700 outline-none border border-gray-300 rounded-lg  focus:ring-2 focus:ring-orange focus:border-transparent  px-4 py-3 transition-all appearance-none cursor-pointer">
                  <option>Securities</option>
                  <option>Customer Service</option>
                  <option>Technical Support</option>
                  <option>Loan Department</option>
                </select>
                <span className="required-mark absolute top-[-20px] right-0 text-red-500 text-2xl">
                  *
                </span>
              </div>
            </div>
          </section>
          <section>
            <div className="border-b-2 border-gray-200 pb-2 mb-6">
              <h2 className="text-green text-xl font-bold">
                Basic information
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              <div className="relative">
                <input
                  className="w-full bg-gray-50 border border-orange/40 rounded-lg outline-none px-4 py-3 focus:ring-2 focus:ring-orange focus:border-transparent transition-all placeholder-gray-400"
                  placeholder="Your name"
                  type="text"
                />
                <span className="required-mark absolute top-[-20px] right-0 text-red-500 text-2xl">
                  *
                </span>
              </div>
              <div className="relative">
                <input
                  className="w-full bg-gray-50 border border-orange/40 rounded-lg outline-none px-4 py-3 focus:ring-2 focus:ring-orange focus:border-transparent transition-all placeholder-gray-400"
                  placeholder="Email"
                  type="email"
                />
                <span className="required-mark absolute top-[-20px] right-0 text-red-500 text-2xl">
                  *
                </span>
              </div>
              <div className="relative">
                <input
                  className="w-full bg-gray-50 border border-orange/40 rounded-lg outline-none px-4 py-3 focus:ring-2 focus:ring-orange focus:border-transparent transition-all placeholder-gray-400"
                  placeholder="Mobile number"
                  type="tel"
                />
                <span className="required-mark absolute top-[-20px] right-0 text-red-500 text-2xl">
                  *
                </span>
              </div>
              <div className="hidden md:block"></div>
              <div className="relative">
                <select className="w-full bg-gray-50 text-gray-700 border border-orange/40 rounded-lg outline-none px-4 py-3 focus:ring-2 focus:ring-orange focus:border-transparent transition-all appearance-none cursor-pointer">
                  <option disabled="" selected="" value="">
                    Question type
                  </option>
                  <option>Inquiry</option>
                  <option>Complaint</option>
                  <option>Suggestion</option>
                </select>
                <span className="required-mark absolute top-[-20px] right-0 text-red-500 text-2xl">
                  *
                </span>
              </div>
              <div className="relative">
                <input
                  className="w-full bg-gray-50 border border-orange/40 rounded-lg outline-none px-4 py-3 focus:ring-2 focus:ring-orange focus:border-transparent transition-all placeholder-gray-400"
                  placeholder="Fax number"
                  type="tel"
                />
              </div>
              <div className="relative md:col-span-2">
                <textarea
                  className="w-full bg-gray-50 border border-orange/40 rounded-lg outline-none px-4 py-3 focus:ring-2 focus:ring-orange focus:border-transparene transition-all placeholder-gray-500 resize-none"
                  placeholder="Enter your question here..."
                  rows="5"
                ></textarea>
                <span className="required-mark absolute top-[-20px] right-0 text-red-500 text-2xl">
                  *
                </span>
                <p className="text-xs text-gray-500 text-right mt-1">
                  Up to 500 Characters
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-100 pt-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <div className="relative w-full sm:w-64">
                <input
                  className="w-full bg-gray-50 border border-orange/40 rounded-lg outline-none px-4 py-3 focus:ring-2 focus:ring-orange focus:border-transparent transition-all placeholder-gray-400"
                  placeholder="Enter the number in the figure"
                  type="text"
                />
                <span className="required-mark absolute top-[-20px] right-0 text-red-500 text-2xl">
                  *
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="block icon-refresh text-orange text-3xl hover:rotate-90 duration-300 cursor-pointer px-4"
                  onClick={() => setNumberCheck(generateNumberCheck)}
                ></span>
                <div className="h-12 w-32 bg-gray-300  rounded flex items-center justify-center relative overflow-hidden select-none">
                  {numberCheck}
                </div>
              </div>
            </div>
            <button
              className="w-full md:w-auto px-12 py-3 bg-orange hover:bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-300 cursor-pointer"
              type="submit"
            >
              Send
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
