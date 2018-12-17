import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import AdminForm from './AdminForm';
import AdminList from './AdminList';

class Admin extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <AdminForm />
        <AdminList/>
      </div>
    );
  }
}

export default Admin;
