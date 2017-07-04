import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Project from './components/Project';
import ProjectList from './components/ProjectList';
import CloseButton from './components/CloseButton';

export default class extends Component {
  render() {
    const {
      onSelectEmployee,
      onSelectTechnology,
      onSelectProject,
      onCloseProject,
      selected,
      projects
    } = this.props;

    return (
      <div>
        <CloseButton show={selected} onClick={onCloseProject} />
        <Typography type="headline" gutterBottom>
          Projects
        </Typography>

        {!selected && <ProjectList
          projects={projects}
          onSelectProject={onSelectProject}
        />}
        {selected && <Project
          project={selected}
          onCloseProject={onCloseProject}
          onSelectEmployee={onSelectEmployee}
          onSelectTechnology={onSelectTechnology}
        />}
      </div>
    );
  }
}


