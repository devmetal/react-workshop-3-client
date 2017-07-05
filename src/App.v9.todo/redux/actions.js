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

const addProjects = projects => ({ });
const addEmployees = employees => ({ });
const addTechs = techs => ({ });

export function init() {
  return { type: '' };
};

export const selectProject = (id) => (dispatch, getState) => {
  
};

export const selectEmployee = (id) => (dispatch, getState) => {
  
};

export const selectTech = (id) => (dispatch, getState) => {
  
};

export const closeProject = () => ({});

export const closeEmployee = () => ({});

export const closeTech = () => ({});
