const Header = () => {
    // React component are required to begin with capital letter to differential between html tags and react component JSX tags.
    return (<header>
        <h1>Scorebord</h1>
        <span className="stats">Players: 1</span>
    </header>
    );
}

// Player component
const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Ben
            </span>
            <span className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">34</span>
                <button className="counter-action increment"> + </button>
            </span>
        </div>
    );
}


ReactDOM.render(
    <Player />,
    document.getElementById('root')
);