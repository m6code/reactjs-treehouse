import React from 'react'
import Counter from './Counter'
import GuestList from './GuestList'

const MainContent = (props) => {
    return (
        <div className="main">
            <div>
                <h2>Invitees</h2>
                <label>
                    <input
                        type="checkbox"
                        onChange={props.handleToggleFilter}
                        checked={props.isFiltered}
                    /> Hide those who haven't responded
          </label>
            </div>
            <Counter
                numberTotalInvited={props.totalInvited}
                numberAttending={props.numberAttending}
                numberUnconfirmed={props.numberUnconfirmed}
            />
            <GuestList
                guests={props.guests}
                toggleConfirmationAt={props.toggleConfirmationAt}
                toggleEditingAt={props.toggleEditingAt}
                setNameAt={props.setNameAt}
                isFiltered={props.isFiltered}
                removeGuestAt={props.removeGuestAt}
                pendingGuest={props.pendingGuest}
            />
        </div>
    )
}

export default MainContent
