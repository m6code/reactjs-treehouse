import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const PlayerList = (props) => {
  return (
    <React.Fragment>
      {props.players.map( (player, index) =>
        <Player 
          {...player}
          key={player.id.toString()} 
          index={index}
          changeScore={props.changeScore}
          removePlayer={props.removePlayer}           
        />
      )}
    </React.Fragment>
  );
}

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  changeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default PlayerList;