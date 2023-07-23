import Transaction from 'components/task4/Transaction';
import css from 'components/task4/Transaction.module.css';

function TransactionHistory({ items }) {
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
        {items.map(item => (
          <Transaction
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            id={item.id}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
