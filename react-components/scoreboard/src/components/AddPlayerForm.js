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
        const {handleValueChange, handleSubmit} = this;
        const {value} = this.state;
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder="Enter a player's name"
                    onChange={handleValueChange}
                    value={value}
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
