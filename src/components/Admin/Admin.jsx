import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import AdminProjectForm from './AdminProjectForm';
import AdminTagForm from './AdminTagForm';
import AdminList from './AdminList';
import AdminSnackbar from './AdminSnackbar';
import { connect } from 'react-redux';

class Admin extends Component {

  componentDidMount() {
    
  }
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

export default connect()(Admin);
