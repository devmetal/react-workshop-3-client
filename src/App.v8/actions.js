import _ from 'lodash';

export const ADD_PROJECTS = 'ADD_PROJECTS';
export const ADD_EMPLOYEES = 'ADD_EMPLOYEES';
export const ADD_TECHS = 'ADD_TECHS';
export const USER_SELECT_PROJECT = 'USER_SELECT_PROJECT';
export const USER_CLOSE_PROJECT = 'USER_CLOSE_PROJECT';
export const USER_SELECT_EMPLOYEE = 'USER_SELECT_EMPLOYEE';
export const USER_CLOSE_EMPLOYEE = 'USER_CLOSE_EMPLOYEE';
export const USER_SELECT_TECH = 'USER_SELECT_TECH';
export const USER_CLOSE_TECH = 'USER_CLOSE_TECH';

const addProjects = projects => ({ type: ADD_PROJECTS, payload: projects });
const addEmployees = employees => ({ type: ADD_EMPLOYEES, payload: employees });
const addTechs = techs => ({ type: ADD_TECHS, payload: techs });

// https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966
// https://cloud.githubusercontent.com/assets/25932306/23173871/e21da3da-f85a-11e6-9129-021365791bdc.png
export const init = () => dispatch => import('./datas')
  .then((datas) => {
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

    dispatch(addProjects(projects));
    dispatch(addEmployees(employees));
    dispatch(addTechs(technologies));
  })
  .catch(err => console.error(err));

export const selectProject = id => ({
  type: USER_SELECT_PROJECT,
  payload: id,
});

export const closeProject = () => ({
  type: USER_CLOSE_PROJECT,
});

export const selectEmployee = id => ({
  type: USER_SELECT_EMPLOYEE,
  payload: id,
});

export const closeEmployee = () => ({
  type: USER_CLOSE_EMPLOYEE,
});

export const selectTech = id => ({
  type: USER_SELECT_TECH,
  payload: id,
});

export const closeTech = () => ({
  type: USER_CLOSE_TECH
});
