const Accounts = () => {
  return (
    <table className="table-fixed w-full border-3 border-orange">
      <tbody>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">What is a current account?</td>
          <td className="p-3">
            Current accounts are demand deposits that provide accessible and
            unconditional cash deposit/ withdrawal into/from the account at any
            time.
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">
            Who are the persons entitled to open a current account?
          </td>
          <td className="p-3">Natural and legal persons.</td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">
            What is the minimum amount for opening the account?
          </td>
          <td className="p-3">
            Minimum limit for account opening in local currency: EGP 2500
            (individual) and EGP 5,000 (corporate)
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">
            Is it necessary to submit a proof of income source upon opening a
            current account?
          </td>
          <td className="p-3">
            Yes, it is necessary to submit a proof of income source as per the
            decision of the Central Bank of Egypt.
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">
            Is it allowed to order a cheque book linked to the current account?
          </td>
          <td className="p-3">
            Yes, you may order a cheque book linked to the account as per the
            applicable procedures.
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">
            Is the account qualified to receive remittances?
          </td>
          <td className="p-3">
            You may receive remittances on the account via the account number
            and the SWIFT code of the branch holding the account.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Accounts;
