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
