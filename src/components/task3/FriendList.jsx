import Friend from 'components/task3/Friend';
import css from 'components/task3/Friend.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <Friend
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        </li>
      ))}
    </ul>
  );
}


// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(PropTypes.string),
// };

export default FriendList;
