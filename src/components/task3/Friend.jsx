import PropTypes from 'prop-types';
import css from 'components/task3/Friend.module.css';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        statys="{isOnline}"
        className={isOnline ? css.status : css.statusOff}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};

export default Friend;
