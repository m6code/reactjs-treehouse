import React, { PureComponent } from 'react'

import Counter from './Counter'

// Player component
class Player extends PureComponent {
    render() {
        // Destructure the class Component
        const {
            score,
            changeScore,
            index,
            name,
            removePlayer,
            id,
        } = this.props;

        console.log(name + " rendered")
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
                    {name}
                </span>
                {/* <Counter /> // Component composition */}
                <Counter
                    score={score}
                    changeScore={changeScore}
                    index={index}
                />
            </div>
        );
    }
}

export default Player;