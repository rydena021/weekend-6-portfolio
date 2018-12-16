import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import AdminList from './AdminList';

class Admin extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <AdminList/>
      </div>
    );
  }
}

export default Admin;
