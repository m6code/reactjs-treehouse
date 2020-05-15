import React from 'react'

import Stats from './Stats'
import Stopwatch from './Stopwatch'

const Header = ({ players, title }) => {
  // React component are required to begin with capital letter to differential between html tags and react component JSX tags.
  // const { players, title } = props;
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
}

export default Header;