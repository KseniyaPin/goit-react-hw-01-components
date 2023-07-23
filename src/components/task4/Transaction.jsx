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

Transaction.propTypes = {
  transaction: PropTypes.array,
};

export default Transaction;
