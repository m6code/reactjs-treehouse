import React from 'react'
import PropTypes from 'prop-types'



const AddPlayerForm = ({ addPlayer }) => {

    let playerInput = React.createRef();
    let handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(playerInput.current.value);
        e.currentTarget.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                ref={playerInput}
                placeholder="Enter a player's name"
            />

            <input
                type="submit"
                value="Add Player"
            />
        </form>
    );
}

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func,
};

export default AddPlayerForm;
