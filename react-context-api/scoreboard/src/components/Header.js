import React from 'react'
import PropTypes from 'prop-types'

import Stats from './Stats'
import Stopwatch from './Stopwatch'

const Header = () => {

  return (
    <header>
      <Stats />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </header>
  );
}


export default Header;