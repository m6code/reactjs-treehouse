const Header = () => {
    // React component are required to begin with capital letter to differential between html tags and react component JSX tags.
    return (<header>
        <h1>Scorebord</h1>
        <span className="stats">Players: 1</span>
    </header>
    );
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);