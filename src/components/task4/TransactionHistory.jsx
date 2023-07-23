import Transaction from 'components/task4/Transaction';
import css from 'components/task4/Transaction.module.css';

function TransactionHistory({ data }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <Transaction transaction={data} />
      </tbody>
    </table>
  );
}

// TransactionHistory.propTypes = {
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.string.isRequired,
//   currency: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };

export default TransactionHistory;
