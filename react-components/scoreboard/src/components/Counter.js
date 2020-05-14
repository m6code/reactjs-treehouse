import React from 'react'


const Counter = (props) => {

  
    // When updating to a new state based on a previous state
    // incrementScore = () => {
    //     this.setState(prevState => {
    //         return {
    //             score: prevState.score + 1
    //         }
    //     });
    // }
  
    // decrementScore = () => {
    //     if (this.state.score > 0) {
    //         this.setState(prevState => ({
    //             score: prevState.score - 1
    //         }));
    //     }
  
    // }

        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{props.score}</span>
                <button className="counter-action increment"> + </button>
            </div>
        );
  }

  export default Counter;