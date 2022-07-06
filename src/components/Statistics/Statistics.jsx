import PropTypes from 'prop-types';
import css from './statistics.module.css'
export const Statistics = ({ events }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>
            
            <ul className={css.statList}>
                {events.map(({ id, label, percentage }) => (

                    <li key={id} className={css.item} style={{ backgroundColor:getRandomHexColor()}}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}%</span>
                        </li>

                ))}
                
                    </ul>
        </section>)
}
Statistics.propTypes = {
    events: PropTypes.arrayOf(
         PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }),)
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}