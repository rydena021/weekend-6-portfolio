import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem'
import Typography from '@material-ui/core/Typography';

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
        <br />
        <Typography align="center" variant="h3">
          My Projects
        </Typography>
        <br />
        <br/>
        {projectHtml}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  projects: reduxState.projects,
});

export default connect(mapStateToProps)(ProjectList);
