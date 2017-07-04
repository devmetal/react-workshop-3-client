import { dashboard } from './query/dashboard';
import { findOneProject } from './query/projects';
import { findOneEmployee } from './query/employees';
import {
  findOneTechnology,
  queryAssignTechToEmp,
  queryUnassignTechFromEmp,
} from './query/technologies';

import getGraph from './getGraph';
import postGraph from './postGraph';

/**
 * This is the API Layer in application
 * This requests has a same response as REST Api-s
 * Eg.: getProject will return a promise with the data field holds the result
 */
const getDashboard = () => getGraph(dashboard());
const getProject = id => getGraph(findOneProject(id));
const getEmployee = id => getGraph(findOneEmployee(id));
const getTechnology = id => getGraph(findOneTechnology(id));
const assignTechToEmp = (techId, empId) => postGraph(
  queryAssignTechToEmp(techId, empId)
);
const unassignTechFromEmp = (techId, empId) => postGraph(
  queryUnassignTechFromEmp(techId, empId)
);

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_FINISH = 'REQUEST_FINISH';
export const ADD_PROJECTS = 'ADD_PROJECTS';
export const ADD_EMPLOYEES = 'ADD_EMPLOYEES';
export const ADD_TECHS = 'ADD_TECHS';
export const USER_SELECT_PROJECT = 'USER_SELECT_PROJECT';
export const USER_CLOSE_PROJECT = 'USER_CLOSE_PROJECT';
export const USER_SELECT_EMPLOYEE = 'USER_SELECT_EMPLOYEE';
export const USER_CLOSE_EMPLOYEE = 'USER_CLOSE_EMPLOYEE';
export const USER_SELECT_TECH = 'USER_SELECT_TECH';
export const USER_CLOSE_TECH = 'USER_CLOSE_TECH';
export const USER_DRAG_START_TECH = 'USER_DRAG_TECH';
export const USER_DRAG_STOP_TECH = 'USER_DRAG_STOP_TECH';
export const USER_ASSIGN_TECH = 'USER_ASSIGN_TECH';

const addProjects = projects => ({ type: ADD_PROJECTS, payload: projects });
const addEmployees = employees => ({ type: ADD_EMPLOYEES, payload: employees });
const addTechs = techs => ({ type: ADD_TECHS, payload: techs });

export function init() {
  return function (dispatch) {
    dispatch({ type: REQUEST_START });
    
    return getDashboard()
      .then((res) => {
        dispatch({ type: REQUEST_FINISH });
        
        const { data } = res;
        dispatch(addProjects(data.projects));
        dispatch(addEmployees(data.employees));
        dispatch(addTechs(data.technologies));
      })
      .catch(err => console.error(err));
  }
};

// Sorter 6s arrow version of function return another function
export const selectProject = (id) => (dispatch) => {
  dispatch({ type: REQUEST_START });
  return getProject(id)
    .then((res) => {
      dispatch({ type: REQUEST_FINISH });

      const { data } = res;
      dispatch({
        type: USER_SELECT_PROJECT,
        payload: data.project,
      });
    });
};

export const selectEmployee = (id) => (dispatch) => {
  dispatch({ type: REQUEST_START });
  return getEmployee(id)
    .then((res) => {
      dispatch({ type: REQUEST_FINISH });

      const { data } = res;
      dispatch({
        type: USER_SELECT_EMPLOYEE,
        payload: data.employee,
      });
    });
};

export const selectTech = (id) => (dispatch) => {
  dispatch({ type: REQUEST_START });
  return getTechnology(id)
    .then((res) => {
      dispatch({ type: REQUEST_FINISH });

      const { data } = res;
      dispatch({
        type: USER_SELECT_TECH,
        payload: data.technology,
      });
    })
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

export const dragStartTech = id => ({
  type: USER_DRAG_START_TECH,
  payload: id,
});

export const dragStopTech = payload => ({
  type: USER_DRAG_STOP_TECH
});

export const startAssignTechToEmp = (empId) => (dispatch, getState) => {
  const { dragged } = getState();
  dispatch({ type: REQUEST_START });
  return assignTechToEmp(dragged, empId)
    .then(() => dispatch(selectEmployee(empId)))
    .then(() => dispatch({ type: REQUEST_FINISH }));
};

export const startUnassignTechFromEmp = (techId, empId) => (dispatch) => {
  dispatch({ type: REQUEST_START });
  return unassignTechFromEmp(techId, empId)
    .then(() => dispatch(selectEmployee(empId)))
    .then(() => dispatch({ type: REQUEST_FINISH }));
};
