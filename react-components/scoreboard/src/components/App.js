import React, { Component } from 'react'

import Header from './Header';
import Player from './Player'

// App component
class App extends Component {

    state = {
        players: [
            {
                id: Date.now(),
                name: "Benjamin",
                score: 0,
            },
            {
                id: Date.now() + 1,
                name: "Johnny",
                score: 0,
            },
            {
                id: Date.now() + 2,
                name: "Simi",
                score: 0,
            },
            {
                id: Date.now() + 3,
                name: "Aramide",
                score: 0,
            }
        ]
    };

    handleScoreChange = (index, delta) => {
        this.setState(prevState => {
            return {
                score: prevState.players[index].score += delta
            }
        });


        // console.log("delta: ", delta + " index: ", index);
    }

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    players={this.state.players}
                />

                {/* Players list */}
                {this.state.players.map((player, index) =>
                    <Player
                        name={player.name}
                        key={player.id.toString()}
                        id={player.id}
                        score={player.score}
                        index={index}
                        removePlayer={this.handleRemovePlayer}
                        changeScore={this.handleScoreChange}
                    // react docs recommends that our key be string
                    />
                )}
            </div>
        );
    }

}

export default App;