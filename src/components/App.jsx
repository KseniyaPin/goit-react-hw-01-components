import Profile from 'components/task1/Profile';
import StatisticsList from 'components/task2/StatisticsList';
import FriendList from 'components/task3/FriendList';
import TransactionHistory from 'components/task4/TransactionHistory';
import user from 'components/data/user.json';
import data from 'components/data/data.json';
import friends from 'components/data/friends.json';
import transactions from 'components/data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={[user.stats.followers, user.stats.views, user.stats.likes]}
      />
      <StatisticsList items={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
