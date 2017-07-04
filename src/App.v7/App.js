import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import _ from 'lodash';

import Projects from './Projects';
import Employees from './Employees';
import Technologies from './Technologies';

const style = {
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
};

const styleSheet = createStyleSheet('App', theme => style);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProject: null,
      selectedEmployee: false,
      selectedTechnology: false,
      projects: [],
      employees: [],
      technologies: [],
    };
  }

  componentDidMount() {
    const datas = require('./datas');

    const { default: { data: { projects } } } = datas;

    const employees = _.chain(projects)
      .map('inthere')
      .flatten()
      .uniqBy('id')
      .value();

    const technologies = _.chain(projects)
      .map('required')
      .flatten()
      .uniqBy('id')
      .value();

    this.setState({ projects, employees, technologies });
  }

  onSelectProject = ({ id }) =>
    this.setState({ selectedProject: _.find(this.state.projects, ['id', id]) });

  onCloseProject = () =>
    this.setState({ selectedProject: null });

  onSelectEmployee = ({ id }) =>
    this.setState({ selectedEmployee: _.find(this.state.employees, ['id', id]) });

  onCloseEmployee = () =>
    this.setState({ selectedEmployee: null });

  onSelectTechnology = ({ id }) =>
    this.setState({ selectedTechnology: _.find(this.state.technologies, ['id', id]) });

  onCloseTechnology = () =>
    this.setState({ selectedTechnology: null });

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
                projects={this.state.projects}
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
                employees={this.state.employees}
                selected={this.state.selectedEmployee}
                onSelectEmployee={this.onSelectEmployee}
                onCloseEmployee={this.onCloseEmployee}
                onSelectTechnology={this.onSelectTechnology}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Technologies
                technologies={this.state.technologies}
                selected={this.state.selectedTechnology}
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

export default withStyles(styleSheet)(App);
