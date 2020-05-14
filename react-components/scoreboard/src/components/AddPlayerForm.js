import React, { Component } from 'react'



class AddPlayerForm extends Component {

    state = {
        value: ''
    };


    handleValueChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({
            value: ""
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder="Enter a player's name"
                    onChange={this.handleValueChange}
                    value={this.state.value}
                />
                <input
                    type='submit'
                    value="Add Player"
                />
            </form>
        );
    }
}

export default AddPlayerForm;
