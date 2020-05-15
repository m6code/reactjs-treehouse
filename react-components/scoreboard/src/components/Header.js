import React from 'react'
import PropTypes from 'prop-types'

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

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

export default Header;