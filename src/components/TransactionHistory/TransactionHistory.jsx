import PropTypes from 'prop-types';
import css from './transactionHistory.module.css'
export const TransactionHistory = ({ events }) => {
    return (
        <table className={css.transactionHistory}>
            <thead style={{ backgroundColor: '#00BCD5',height:"40px"}}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {events.map(({ id, type, amount, currency }) => (

                <tbody key={id} style={{ textAlign: 'center', height: "40px" }} >
                    <tr>
                        <td style={{textTransform:'capitalize'}}>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                    
                </tbody>

            ))}
                          
        </table>
    )
}
TransactionHistory.propTypes = {
    events: PropTypes.arrayOf(
         PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
             amount: PropTypes.string.isRequired,
             currency: PropTypes.string.isRequired
        }),)
}