import PropTypes from 'prop-types';

const Transaction = ({ transaction }) => {
  return transaction.map(el => (
    <tr key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>
  ));
};



  //  return (
  //    <tr key={id}>
  //      <td>{type}</td>
  //      <td>{amount}</td>
  //      <td>{currency}</td>
  //    </tr>
  //  );


// Transaction.propTypes = {
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.string.isRequired,
//   currency: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };

export default Transaction;
