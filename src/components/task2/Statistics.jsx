import PropTypes from 'prop-types';
import css from 'components/task2/Statistics.module.css';

const Statistics = ({ stats }) => {
  return (
    <div>
      <span className={css.label}>{stats[0]}</span>
      <span className={css.percentage}>{stats[1]}%</span>
    </div>
  );
};

// Statistics.propTypes = {
//   id: PropTypes.string,
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };

Statistics.propTypes = {
  stats: PropTypes.array
};


export default Statistics;
