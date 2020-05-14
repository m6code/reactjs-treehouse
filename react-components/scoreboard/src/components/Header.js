import React from 'react'

const Header = (props) => {
    // React component are required to begin with capital letter to differential between html tags and react component JSX tags.
    return (<header>
        <h1>{props.title}</h1>
        <span className="stats">Players: {props.totalPlayers}</span>
    </header>
    );
  }

export default Header;