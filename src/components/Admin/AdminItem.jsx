import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class AdminItem extends Component {

  handleClick = () => {
    this.props.dispatch({ type: 'DELETE_PROJECT', payload: this.props.project.id })
  }
  render() {
    return (
      <tr>
        <td>{this.props.project.name}</td>
        <td>
          <Button size="small" color="secondary" onClick={this.handleClick}>
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

export default connect()(AdminItem);
