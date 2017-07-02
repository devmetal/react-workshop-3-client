import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input/Input';
import Button from 'material-ui/Button';
import IconButtton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import CloseIcon from 'material-ui-icons/Clear';
import * as Actions from './actions';
import _ from 'lodash';

const EmployeeList = ({
  onSelectEmployee,
  employees = []
}) => (
    <List>
      {!!employees.length && employees.map(employee => (
        <ListItem key={employee.id} onClick={() => onSelectEmployee(employee)} button>
          <ListItemText primary={employee.name} />
        </ListItem>
      ))}
    </List>
  );

const ProjectList = ({
  onSelectProject,
  projects = []
}) => (
    <List>
      {!!projects.length && projects.map(project => (
        <ListItem key={project.id} onClick={() => onSelectProject(project)} button>
          <ListItemText primary={project.name} />
        </ListItem>
      ))}
    </List>
  );

const TechnologyList = ({
  onSelectTechnology,
  stack = []
}) => (
    <List>
      {!!stack.length && stack.map(tech => (
        <ListItem key={tech.id} onClick={() => onSelectTechnology(tech)} button>
          <ListItemText primary={tech.name} />
        </ListItem>
      ))}
    </List>
  );

const Project = ({
  onSelectEmployee,
  onSelectTechnology,
  project
}) => (
    <div>
      <Typography type="title" gutterBottom>
        {project.name}
      </Typography>
      <Typography type="body1">
        Description is not existing yet
      </Typography>
      <hr />
      <Typography type="title" gutterBottom>
        In There:
      </Typography>
      <EmployeeList employees={project.inthere} onSelectEmployee={onSelectEmployee} />
      <hr />
      <Typography type="title" gutterBottom>
        Requirements
      </Typography>
      <TechnologyList stack={project.required} onSelectTechnology={onSelectTechnology} />
    </div>
  );

const Employee = ({
  onSelectTechnology,
  employee
}) => (
    <div>
      <Typography type="title">
        {employee.name}
      </Typography>
      <hr />
      <TechnologyList
        onSelectTechnology={onSelectTechnology}
        stack={employee.stack}
      />
    </div>
  );

const Technology = ({
  onSelectEmployee,
  technology
}) => (
    <div>
      <Typography type="title">
        {technology.name}
      </Typography>
      <Typography type="body1">
        Technology description
    </Typography>
      <hr />
      <EmployeeList employees={technology.usedBy} onSelectEmployee={onSelectEmployee} />
    </div>
  );

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
        {selected &&
          <IconButtton
            aria-label="Close"
            style={{ float: 'right' }}
            onClick={onCloseProject}
          >
            <CloseIcon />
          </IconButtton>
        }

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

class Technologies extends Component {
  render() {
    const {
      onSelectTechnology,
      onCloseTechnology,
      onSelectEmployee,
      selected,
      technologies,
    } = this.props;

    return (
      <div>
        {selected &&
          <IconButtton
            aria-label="Close"
            style={{ float: 'right' }}
            onClick={onCloseTechnology}
          >
            <CloseIcon />
          </IconButtton>
        }

        <Typography type="headline" gutterBottom>
          Technologies
        </Typography>
        {!selected && <TechnologyList
          stack={technologies}
          onSelectTechnology={onSelectTechnology}
        />}
        {selected && <Technology
          onCloseTechnology={onCloseTechnology}
          onSelectEmployee={onSelectEmployee}
          technology={selected}
        />}
      </div>
    );
  }
}

class Employees extends Component {
  render() {
    const {
      onSelectEmployee,
      onCloseEmployee,
      onSelectTechnology,
      employees,
      selected
    } = this.props;

    return (
      <div>
        {selected &&
          <IconButtton
            aria-label="Close"
            style={{ float: 'right' }}
            onClick={onCloseEmployee}
          >
            <CloseIcon />
          </IconButtton>
        }

        <Typography type="headline" gutterBottom>
          Employees
        </Typography>
        {!selected && <EmployeeList
          employees={employees}
          onSelectEmployee={onSelectEmployee}
        />}
        {selected && <Employee
          employee={selected}
          onCloseEmployee={onCloseEmployee}
          onSelectTechnology={onSelectTechnology}
        />}
      </div>
    )
  };
}

const styleSheet = createStyleSheet('FullWidthGrid', theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 16,
  },
  container: {
    marginTop: 10,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

class App extends Component {
  componentDidMount() {
    this.props.init();
  }

  onSelectProject = ({ id }) => this.props.selectProject(id);
  onCloseProject = () => this.props.closeProject();

  onSelectEmployee = ({ id }) => this.props.selectEmployee(id);
  onCloseEmployee = () => this.props.closeEmployee();

  onSelectTechnology = ({ id }) => this.props.selectTech(id);
  onCloseTechnology = () => this.props.closeTech();

  render() {
    const {
      classes,
      projects,
      employees,
      technologies,
      selectedProject,
      selectedEmployee,
      selectedTechnology,
    } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              Where is?
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid className={classes.container} container gutter={24}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Projects
                projects={projects}
                selected={selectedProject}
                onSelectProject={this.onSelectProject}
                onSelectEmployee={this.onSelectEmployee}
                onSelectTechnology={this.onSelectTechnology}
                onCloseProject={this.onCloseProject}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Employees
                employees={employees}
                selected={selectedEmployee}
                onSelectEmployee={this.onSelectEmployee}
                onCloseEmployee={this.onCloseEmployee}
                onSelectTechnology={this.onSelectTechnology}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Technologies
                technologies={technologies}
                selected={selectedTechnology}
                onSelectTechnology={this.onSelectTechnology}
                onCloseTechnology={this.onCloseTechnology}
                onSelectEmployee={this.onSelectEmployee}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styleSheet)(connect(
  (state) => ({
    ...state,
  }),
  (dispatch) => ({
    init() {
      dispatch(Actions.init());
    },
    selectProject(id) {
      dispatch(Actions.selectProject(id));
    },
    closeProject() {
      dispatch(Actions.closeProject())
    },
    selectEmployee(id) {
      dispatch(Actions.selectEmployee(id));
    },
    closeEmployee() {
      dispatch(Actions.closeEmployee());
    },
    selectTech(id) {
      dispatch(Actions.selectTech(id));
    },
    closeTech() {
      dispatch(Actions.closeTech());
    }
  }),
)(App));
