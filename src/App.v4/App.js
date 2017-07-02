import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input/Input';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

const EmployeeList = ({ onSelectEmployee }) => (
  <ul>
    <li onClick={onSelectEmployee}>Adam</li>
    <li onClick={onSelectEmployee}>Fruzsi</li>
    <li onClick={onSelectEmployee}>Lacka</li>
  </ul>
);

const ProjectList = ({ onSelectProject }) => (
  <ul>
    <li onClick={onSelectProject}>Madbro</li>
    <li onClick={onSelectProject}>Moshy</li>
    <li onClick={onSelectProject}>Meetup Feed</li>
  </ul>
);

const TechnologyList = ({ onSelectTechnology }) => (
  <ul>
    <li onClick={onSelectTechnology} >React</li>
    <li onClick={onSelectTechnology}>Angular</li>
    <li onClick={onSelectTechnology}>Meteor</li>
  </ul>
);

const Project = ({
  onCloseProject,
  onSelectEmployee,
  onSelectTechnology
}) => (
    <div>
      <a
        href="#"
        onClick={onCloseProject}
      >
        Close
        </a>
      <h1>Project Name</h1>
      <p>Description of project</p>
      <hr />
      <h2>Whos in there?</h2>
      <EmployeeList onSelectEmployee={onSelectEmployee} />
      <hr />
      <h2>Requirements</h2>
      <TechnologyList onSelectTechnology={onSelectTechnology} />
    </div>
  );

const Employee = ({ onCloseEmployee }) => (
  <div>
    <a
      href="#"
      onClick={onCloseEmployee}
    >
      Close
        </a>
    <h1>Adam</h1>
    <hr />
    <TechnologyList />
  </div>
);

const Technology = ({ onCloseTechnology }) => (
  <div>
    <a
      href="#"
      onClick={onCloseTechnology}
    >
      Close
        </a>
    <h1>React</h1>
    <hr />
    <div>
      Description of react with a logo
        </div>
    <hr />
    <EmployeeList />
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
    } = this.props;

    return (
      <div>
        <h1>
          Projects
        </h1>
        {!selected && <ProjectList
          onSelectProject={onSelectProject}
        />}
        {selected && <Project
          onCloseProject={onCloseProject}
          onSelectEmployee={onSelectEmployee}
          onSelectTechnology={onSelectTechnology}
        />}
      </div>
    );
  }
}

class Technologies extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: false };
    this.onSelectTechnology = this.onSelectTechnology.bind(this);
    this.onCloseTechnology = this.onCloseTechnology.bind(this);
  }

  onSelectTechnology() {
    this.setState({ selected: true });
  }

  onCloseTechnology() {
    this.setState({ selected: false });
  }

  render() {
    return (
      <div>
        <h1>
          Technologies
        </h1>
        {!this.state.selected && <TechnologyList
          onSelectTechnology={this.onSelectTechnology}
        />}
        {this.state.selected && <Technology
          onCloseTechnology={this.onCloseTechnology}
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
    } = this.props;

    return (
      <div>
        <h1>
          Employees
        </h1>
        {!this.props.selected && <EmployeeList
          onSelectEmployee={onSelectEmployee}
        />}
        {this.props.selected && <Employee
          onCloseEmployee={onCloseEmployee}
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
  constructor(props) {
    super(props);

    this.state = {
      selectedProject: false,
      selectedEmployee: false,
      selectedTechnology: false,
    };
  }

  onSelectProject = () => this.setState({ selectedProject: true });
  onCloseProject = () => this.setState({ selectedProject: false });

  onSelectEmployee = () => this.setState({ selectedEmployee: true });
  onCloseEmployee = () => this.setState({ selectedEmployee: false });

  onSelectTechnology = () => this.setState({ selectedTechnology: true });
  onCloseTechnology = () => this.setState({ selectedTechnology: false });

  render() {
    const { classes } = this.props;

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
                selected={this.state.selectedProject}
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
                selected={this.state.selectedEmployee}
                onCloseEmployee={this.onCloseEmployee}
                onSelectEmployee={this.onSelectEmployee}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Technologies />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styleSheet)(App);
