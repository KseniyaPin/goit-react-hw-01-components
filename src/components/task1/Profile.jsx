import PropTypes from 'prop-types';
import defaultImg from 'components/task1/default.jpg';
import css from 'components/task1/Profile.module.css';

const Profile = ({
  username = 'no name',
  tag,
  location,
  avatar = defaultImg,
  stats,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>,
        <img
          src={avatar ?? defaultImg}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats[0]}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats[1]}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats[2]}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Profile;
