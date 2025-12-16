const DebitCards = () => {
  return (
    <table className="table-fixed w-full border-3 border-orange">
      <tbody>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">
            Is it allowed to link more than one account to the card?
          </td>
          <td className="p-3">
            You may link more than one account to the debit card.
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">
            Can I transfer funds between the accounts using the debit card?
          </td>
          <td className="p-3">
            You may transfer funds between the accounts registered on the debit
            card via ATMs.
          </td>
        </tr>
        <tr className="odd:bg-gray-100 even:bg-gray-300">
          <td className="p-3">
            Is it allowed to add the credit card number to the debit card?
          </td>
          <td className="p-3">
            The credit card can be added in order to enable the customer to make
            credit card payments via our ATMs.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DebitCards;
