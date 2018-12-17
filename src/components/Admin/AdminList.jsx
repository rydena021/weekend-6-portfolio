import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminItem from './AdminItem'

class AdminList extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PROJECTS' });
  }

  render() {
    let projectHtml = this.props.projects.map(project => {
      return <AdminItem key={project.id} project={project} />
    })
    return (
      <div>
        <h1>Project List</h1>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {projectHtml}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  projects: reduxState.projects,
});

export default connect(mapStateToProps)(AdminList);
