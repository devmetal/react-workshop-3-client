import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import CloseButton from './components/CloseButton';
import ProjectList from './components/ProjectList';
import Project from './components/Project';

class Projects extends Component {
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
          onSelectEmployee={onSelectEmployee}
          onSelectTechnology={onSelectTechnology}
        />}
      </div>
    );
  }
}

export default Projects;
