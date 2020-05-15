import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


import Counter from './Counter'

// Player component
class Player extends PureComponent {
    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        id: PropTypes.number,
        index: PropTypes.number,
        score: PropTypes.number.isRequired
    };

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