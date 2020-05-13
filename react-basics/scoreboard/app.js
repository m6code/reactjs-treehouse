const players = [
    {
        id: Date.now(),
        name: "Benjamin",
        score: 8909
    },
    {
        id: Date.now()+1,
        name: "Johnny",
        score: 78
    },
    {
        id: Date.now()+2,
        name: "Simi",
        score: 99
    },
    {
        id: Date.now()+3,
        name: "Aramide",
        score: 88
    }
]

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
const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={props.initPlayers.length} />

            {/* Players list */}
            {props.initPlayers.map(player =>
                <Player
                    name={player.name}
                    score={player.score}
                    key={player.id.toString()}
                    // react docs recommends that our key be string
                />
            )}
        </div>
    );
}

ReactDOM.render(
    <App initPlayers={players} />,
    document.getElementById('root')
);