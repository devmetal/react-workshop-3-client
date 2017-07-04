import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import * as Actions from './redux/actions';

import Projects from './Projects';
import Employees from './Employees';
import Technologies from './Technologies';
import LoadingBar from './components/LoadingBar';

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
}

const styleSheet = createStyleSheet('App', theme => style);

class App extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const { classes, loading } = this.props;

    return (
      <div className={classes.root}>
        <LoadingBar show={loading} />
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
              <Projects />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Employees />
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

const AppWithStyles = withStyles(styleSheet)(App);
const ConnectedApp = connect(
  state => ({ loading: state.loading }),
  dispatch => ({
    init() {
      dispatch(Actions.init());
    },
  })
)(AppWithStyles);

export default ConnectedApp;
