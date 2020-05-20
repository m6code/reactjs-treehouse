import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    return (
      ReactDOM.createPortal(
        this.props.children,
        document.getElementById('my-portal')
      )
    );
  }
}

export default Modal;
