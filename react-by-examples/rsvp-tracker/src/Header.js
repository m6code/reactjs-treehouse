import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
    return (
        <header>
            <h1>RSVP</h1>
            <p>A Treehouse App</p>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    onChange={props.handleNameInput}
                    value={props.pendingGuest}
                    placeholder="Invite Someone" />
                <button type="submit" name="submit" value="submit">Submit</button>
            </form>
        </header>
    )
}

Header.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleNameInput: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
}

export default Header
