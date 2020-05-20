import React, { Component } from 'react';

class Teacher extends Component {

  state = {
    isLoading: false
  };

  componentWillReceiveProps() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  }

  render() {
    if (this.state.isLoading) {
      return <img className="spinner" src="img/loading.gif" alt="loading" />;
    }

    return (
      <div>
        <h2 className="teacher-name">{this.props.teacher}</h2>
        <img src={`img/${this.props.teacher}.png`} alt={this.props.teacher} />
      </div>
    );
  }
}

export default Teacher;
