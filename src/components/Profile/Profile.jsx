import PropTypes from 'prop-types';
import css from './profile.module.css'
export const Profile = ({ username, tag, location, avatar, stats }) => {
   const { followers, views, likes } = stats;
  return (
    <div className={css.profile} key={username}>
    <div className={css.description}>
      <img
      width="100"
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{ location }</p>

    </div>


    <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
                <span className={css.quantity}>{ followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
                <span className={css.quantity}>{ views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
                <span className={css.quantity}>{ likes}</span>
    </li>
    </ul>
    </div>

    )
}
Profile.propTypes = {
  props: PropTypes.exact(
    PropTypes.exact({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
      })
    })
  )
};
