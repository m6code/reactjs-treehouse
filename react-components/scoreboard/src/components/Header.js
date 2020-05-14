import React from 'react'

import Stats from './Stats'

const Header = (props) => {
  // React component are required to begin with capital letter to differential between html tags and react component JSX tags.
  return (
    <header>
      <Stats players={props.players} />
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;