import React from 'react'

const Header = (props) => {
  // React component are required to begin with capital letter to differential between html tags and react component JSX tags.
  return (<header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
  </header>
  );
}

// Counter component
class Counter extends React.Component {
  // constructor(props) {
  //     super(props)

  //     this.state = {
  //       score: 0,   
  //     };
  // }
  // OR
  state = {
      score: 0,
  };

  // When updating to a new state based on a previous state
  incrementScore = () => {
      this.setState(prevState => {
          return {
              score: prevState.score + 1
          }
      });
  }

  decrementScore = () => {
      if (this.state.score > 0) {
          this.setState(prevState => ({
              score: prevState.score - 1
          }));
      }

  }
  //Binding Event handlers to components
  //
  // [A] if the function is defined like so `de|incrementScore() {...}`
  // add this to the class after the state `incrementScore = this.incrementScore.bind(this);`  // then refer to it in the button like this `{this.incrementScore}`
  // add this to the class after the state `decrementScore = this.decrementScore.bind(this);` // then refer to it in the button like this `{this.decrementScore}`
  // OR
  // call this directly on the button onClick method `{this.decrementScore.bind(this)}`
  // OR
  // use a call back function directly on the onClick method `{() => this.incrementScore()}`
  //
  // [B] if the function is defined as arrow function
  // directly bind it with a lexical this, i.e an arrow function when defining the method like so
  // decrementScore = () => {...} and just reference it in the button's onClick like so `{this.decrementScore}`
  // incrementScore = () => {...} and just reference it in the button's onClick like so `{this.incrementScore}`

  render() {
      return (
          <div className="counter">
              <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
              <span className="counter-score">{this.state.score}</span>
              <button className="counter-action increment" onClick={this.incrementScore}> + </button>
          </div>
      );
  }
}

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