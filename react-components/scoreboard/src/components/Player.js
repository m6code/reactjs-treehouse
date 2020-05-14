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
            <Counter
                score={props.score}
                changeScore={props.changeScore}
                index={props.index}
            />
        </div>
    );
}

export default Player;