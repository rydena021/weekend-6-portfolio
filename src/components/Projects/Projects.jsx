import React, { Component } from 'react';
import ProjectHeader from './ProjectHeader';
import ProjectList from './ProjectList';

class Admin extends Component {
  render() {
    return (
      <div>
        <ProjectHeader />
        <ProjectList />
      </div>
    );
  }
}

export default Admin;
