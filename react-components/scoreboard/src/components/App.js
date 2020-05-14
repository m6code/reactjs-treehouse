import React from 'react'

import Header from './Header'; 
import Player from './Player'

// App component
class App extends React.Component {

  state = {
      players: [
          {
              id: Date.now(),
              name: "Benjamin",
          },
          {
              id: Date.now() + 1,
              name: "Johnny",
          },
          {
              id: Date.now() + 2,
              name: "Simi",
          },
          {
              id: Date.now() + 3,
              name: "Aramide",
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
                  // react docs recommends that our key be string
                  />
              )}
          </div>
      );
  }

}

export default App;