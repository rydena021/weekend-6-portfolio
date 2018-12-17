import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import AdminProjectForm from './AdminProjectForm';
import AdminTagForm from './AdminTagForm';
import AdminList from './AdminList';
import AdminSnackbar from './AdminSnackbar';

class Admin extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <AdminProjectForm />
        <AdminTagForm />
        <AdminList/>
        <AdminSnackbar />
      </div>
    );
  }
}

export default Admin;
