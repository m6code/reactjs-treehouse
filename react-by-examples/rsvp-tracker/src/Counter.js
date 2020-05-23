import React from 'react'
import PropTypes from 'prop-types'


function Counter(props) {
    return (

            <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>{props.numberAttending}</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>{props.numberUnconfirmed}</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>{props.numberTotalInvited}</td>
              </tr>
            </tbody>
          </table>
    )
}

Counter.propTypes = {
    numberAttending: PropTypes.number,
    numberUnconfirmed: PropTypes.number,
    numberTotalInvited: PropTypes.number,
}

export default Counter;
