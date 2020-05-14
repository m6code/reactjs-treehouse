import React from 'react'

import Counter from './Counter'

// Player component
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
                {props.name}
            </span>
            {/* <Counter /> // Component composition */}
            <Counter />
        </div>
    );
  }

export default Player;