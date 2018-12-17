import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminItem extends Component {

  handleClick = () => {
    this.props.dispatch({ type: 'DELETE_PROJECT', payload: this.props.project.id })
  }
  render() {
    return (
      <tr>
        <td>{this.props.project.name}</td>
        <td><button onClick={this.handleClick}>DELETE</button></td>
      </tr>
    );
  }
}

export default connect()(AdminItem);
