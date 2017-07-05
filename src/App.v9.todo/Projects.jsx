import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Project from './components/Project';
import ProjectList from './components/ProjectList';
import CloseButton from './components/CloseButton';
import * as Actions from './redux/actions';

class Projects extends Component {
  render() {
    const {
      selectEmployee,
      selectTechnology,
      selectProject,
      closeProject,
      selected,
      projects
    } = this.props;

    return (
      <div>
        <CloseButton show={selected} onClick={closeProject} />
        <Typography type="headline" gutterBottom>
          Projects
        </Typography>
        {!selected && <ProjectList
          projects={projects}
          onSelectProject={selectProject}
        />}
        {selected && <Project
          project={selected}
          onSelectEmployee={selectEmployee}
          onSelectTechnology={selectTechnology}
        />}
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({}),
)(Projects);
