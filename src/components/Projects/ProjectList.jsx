import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem'

class ProjectList extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PROJECTS' });
  }

  render() {
    let projectHtml = this.props.projects.map( project => {
      return <ProjectItem key={project.id} project={project}/>
    })
    return (
      <div>
        <h1>Project List</h1>
        {projectHtml}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  projects: reduxState.projects,
});

export default connect(mapStateToProps)(ProjectList);
