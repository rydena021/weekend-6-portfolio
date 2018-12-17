import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import AdminProjectForm from './AdminProjectForm';
import AdminTagForm from './AdminTagForm';
import AdminList from './AdminList';

class Admin extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <AdminProjectForm />
        <AdminTagForm />
        <AdminList/>
      </div>
    );
  }
}

export default Admin;
