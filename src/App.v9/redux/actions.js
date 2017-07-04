import query from './query';
import getGraph from './getGraph';

export const ADD_PROJECTS = 'ADD_PROJECTS';
export const ADD_EMPLOYEES = 'ADD_EMPLOYEES';
export const ADD_TECHS = 'ADD_TECHS';
export const USER_SELECT_PROJECT = 'USER_SELECT_PROJECT';
export const USER_CLOSE_PROJECT = 'USER_CLOSE_PROJECT';
export const USER_SELECT_EMPLOYEE = 'USER_SELECT_EMPLOYEE';
export const USER_CLOSE_EMPLOYEE = 'USER_CLOSE_EMPLOYEE';
export const USER_SELECT_TECH = 'USER_SELECT_TECH';
export const USER_CLOSE_TECH = 'USER_CLOSE_TECH';

const getDashboard = () => getGraph(query);

const addProjects = projects => ({ type: ADD_PROJECTS, payload: projects });
const addEmployees = employees => ({ type: ADD_EMPLOYEES, payload: employees });
const addTechs = techs => ({ type: ADD_TECHS, payload: techs });

export function init() {
  return function (dispatch) {
    return getDashboard()
      .then((res) => {
        const { data } = res;
        dispatch(addProjects(data.projects));
        dispatch(addEmployees(data.employees));
        dispatch(addTechs(data.technologies));
      })
      .catch(err => console.error(err));
  }
};

export const selectProject = (id) => (dispatch, getState) => {
  const { projects } = getState();
  const project = projects.find(p => p.id === id);
  dispatch({ type: USER_SELECT_PROJECT, payload: project });
};

export const selectEmployee = (id) => (dispatch, getState) => {
  const { employees } = getState();
  const employee = employees.find(e => e.id === id);
  dispatch({ type: USER_SELECT_EMPLOYEE, payload: employee });
};

export const selectTech = (id) => (dispatch, getState) => {
  const { technologies } = getState();
  const technology = technologies.find(t => t.id === id);
  dispatch({ type: USER_SELECT_TECH, payload: technology });
};

export const closeProject = () => ({
  type: USER_CLOSE_PROJECT,
});

export const closeEmployee = () => ({
  type: USER_CLOSE_EMPLOYEE,
});

export const closeTech = () => ({
  type: USER_CLOSE_TECH
});
