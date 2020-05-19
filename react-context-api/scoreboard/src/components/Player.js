import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';

class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    
    const { 
      name,
      id,
      score,
      index
    } = this.props;

    return (
      <div className="player">
        <Consumer>
          { context => (
            <span className="player-name">
              <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
              { name }
            </span> 
          )}
        </Consumer>
  
        <Counter 
          score={score}
          index={index}
        />
      </div>
    );
  }
}

export default Player;