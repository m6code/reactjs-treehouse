const Header = () => {
    // React component are required to begin with capital letter to differential between html tags and react component JSX tags.
    return (<header>
        <h1>Scorebord</h1>
        <span className="stats">Players: 1</span>
    </header>
    );
}

// Counter component
const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">21</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

// Player component
const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Ben
            </span>
            {/* <Counter /> // Component composition */}
            <Counter />
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header />

            {/* Players list */}
            <Player />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);