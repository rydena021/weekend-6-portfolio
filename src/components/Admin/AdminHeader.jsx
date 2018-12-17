import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminHeader extends Component {
  render() {
    return (
      <div>
        <h1>Admin</h1>
        <Link to="/">Back to Projects</Link>
      </div>
    );
  }
}

export default AdminHeader;
