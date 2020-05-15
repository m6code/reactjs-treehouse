import React, { Component } from 'react'

export class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0,
    };

    componentDidMount() {
        // LifeCycles Hooks
        // Called as soon as a component is mounted
        this.intervalID = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState(prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
            }));
        }
    }

    handleStopwatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning,
        }));

        if (!this.state.isRunning) {
            this.setState({
                previousTime: Date.now(),
            });
        }
    }

    handleReset = () => {
        this.setState({
            elapsedTime: 0
        });
    }

    render() {
        const {handleReset, handleStopwatch} = this; // equivalent to writing {this.handleReset} & {this.handleStopwatch} in the onClick method of the buttons
        const {elapsedTime, isRunning} = this.state; //Destructuring to avoid this.state.elapsedTime|isRunning calling in the JSX

        const seconds = Math.floor(elapsedTime / 1000);
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    {seconds}
                </span>
                <button onClick={handleStopwatch}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button onClick={handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;
