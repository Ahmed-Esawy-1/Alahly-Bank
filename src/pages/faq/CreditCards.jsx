const CreditCard = () => {
  return (
    <table className="table-fixed w-full border-3 border-orange">
      <tbody>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">How do I apply for credit cards?</td>
          <td className="p-3">
            Please complete the National Bank of Egypt credit card application
            form and submit it at your nearest NBE branch.
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">How do I collect my credit card after issuance?</td>
          <td className="p-3">
            Your credit card will be sent to you via a courier or the branch.
            You can check the progress of the application by contacting our
            customer service
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">How do I activate my credit card?</td>
          <td className="p-3">
            You can activate your credit card through NBE ATMs/ Al Ahly Net /
            NBE Mobile or NBE call center 19623.
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">What is the minimum payment for the credit card?</td>
          <td className="p-3">The minimum payment is 5% of the outstanding balance.</td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">
            Are there any interest rates charged in case of repaying the minimum
            payment?
          </td>
          <td className="p-3">
            Yes, an interest rate is calculated in case of repaying the minimum
            payment.
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">How do I pay my credit card?</td>
          <td className="p-3">
            There are several methods to pay your credit card (via the nearest
            branch, ATMs, Fawry outlets, and the transfer of funds from the
            cardholder's account via Al Ahly Net service).
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">Can I set up installment payments directly with the merchant?</td>
          <td className="p-3">
            Yes, you can set up installment payments with NBE accredited
            merchants for terms starting from 6 months and up to 36 months.
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">
            Can I set up installment payments for purchases from a non-NBE
            accredited merchant?
          </td>
          <td className="p-3">
            Purchases can be repaid in installments within the current month
            after contacting the customer service to apply for the installment
            by phone service.
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">Can any cash advance transaction be repaid in installments?</td>
          <td className="p-3">
            You can repay the amount of cash advance after contacting the
            customer service to apply for the installment by phone service.
          </td>
        </tr>

        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">How do I know the amounts payable on my card?</td>
          <td className="p-3">
            You can contact the customer service, use Al Ahly Net Service,
            review the paper statement of account sent to you monthly or inquire
            via ATMs.
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">What do I do if I do not receive my statement?</td>
          <td className="p-3">
            If you do not receive your statement, please contact our customer
            service to verify your address and the necessary action will be
            taken.
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">What if my card is lost?</td>
          <td className="p-3">
            You can contact our call center on 19623 to suspend the card and
            request a replacement.
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">Can the PIN code be changed?</td>
          <td className="p-3">
            Yes, the PIN code can be changed via ATMs after contacting the
            customer service.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CreditCard;
