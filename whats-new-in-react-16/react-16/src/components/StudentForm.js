import React, { Component } from 'react';

export default class User extends Component {

  state = {
    student: {
      name: '',
    }
  };

  updateStudentName = name =>
    this.setState({
      student: {
        name: name,
      }
    });

  render() {
    const { name } = this.state.student;

    return (
      <div>
        <input
          type="text"
          placeholder="Enter name..."
          onChange={e => this.updateStudentName(e.target.value)}
          value={name}
        />

        <button
          type="button"
          onClick={() => this.setState({ student: null })}
        >Reset Student</button>

        <p><strong>Student Name:</strong> {name}</p>
      </div>
    );
  }
}
