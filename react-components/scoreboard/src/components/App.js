import React, {Component} from 'react'

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

  handleRemovePlayer = (id) => {
      this.setState(prevState => {
          return{
              players: prevState.players.filter( p => p.id !== id)
          };
      });
  }

  render() {
      return (
          <div className="scoreboard">
              <Header title="Scoreboard" totalPlayers={this.state.players.length} />

              {/* Players list */}
              {this.state.players.map(player =>
                  <Player
                      name={player.name}
                      key={player.id.toString()}
                      id={player.id}
                      removePlayer={this.handleRemovePlayer}
                      score={player.score}
                  // react docs recommends that our key be string
                  />
              )}
          </div>
      );
  }

}

export default App;