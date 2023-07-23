import Statistics from 'components/task2/Statistics';
import css from 'components/task2/Statistics.module.css';

function StatisticsList({ title, items }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {items.map(item => (
          <li
            key={item.id}
            className={css.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <Statistics stats={[item.label, item.percentage]} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatisticsList;

// Рандомні кольори
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
