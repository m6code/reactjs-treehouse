import React, { PureComponent } from 'react'

import Counter from './Counter'

// Player component
class Player extends PureComponent {
    render() {
        console.log(this.props.name + " rendered")
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>x</button>
                    {this.props.name}
                </span>
                {/* <Counter /> // Component composition */}
                <Counter
                    score={this.props.score}
                    changeScore={this.props.changeScore}
                    index={this.props.index}
                />
            </div>
        );
    }
}

export default Player;