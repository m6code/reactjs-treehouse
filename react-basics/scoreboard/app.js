const Header = (props) => {
    // React component are required to begin with capital letter to differential between html tags and react component JSX tags.
    return (<header>
        <h1>{props.title}</h1>
        <span className="stats">Players: {props.totalPlayers}</span>
    </header>
    );
}

// Counter component
const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

// Player component
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            {/* <Counter /> // Component composition */}
            <Counter score={props.score} />
        </div>
    );
}

// App component
const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={1} />

            {/* Players list */}
            <Player name="BenJamin" score={23 + 10} />
            <Player name="Valerie" score={78} />
            <Player name="Dammy Krane" score={14} />
            <Player name="Barnabas" score={309} />
        </div>
    );
}

ReactDOM.render(
            <App />,
    document.getElementById('root')
);