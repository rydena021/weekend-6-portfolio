import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    let project = this.props.project;
    return (
      <ul>
        <li>{project.name}</li>
        <li>{project.description}</li>
        <li><img src={project.thumbnail} alt={project.name} /></li>
        <li><a href={project.github_url}>{project.github_url}</a></li>
        <li><a href={project.website_url}>{project.website_url}</a></li>
        <li>{project.date_completed}</li>
        <li>{project.tag_id}</li>
      </ul>
    );
  }
}

export default ProjectItem;
