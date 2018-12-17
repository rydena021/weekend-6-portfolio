import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminHeader extends Component {
  render() {
    return (
      <Link to="/">Back to Projects</Link>
    );
  }
}

export default AdminHeader;
