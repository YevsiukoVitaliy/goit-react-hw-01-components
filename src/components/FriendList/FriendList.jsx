import PropTypes from 'prop-types';
import css from './friendList.module.css'
export const FriendList = ({ events }) => {
    return (
        <ul className={css.friendList}>
            {
            events.map(({ id, avatar, name, isOnline }) => (
                <li className={css.item} key={id}>
                <span className={css.status} style={{backgroundColor:isOnline ? 'green' :'red'}}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            ))
        }
        </ul>
    )
}
    FriendList.propTypes = {
    events: PropTypes.arrayOf(
         PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
             id: PropTypes.number.isRequired,
            isOnline : PropTypes.bool.isRequired,
        }),)
}
