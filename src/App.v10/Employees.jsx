import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Employee from './components/Employee';
import EmployeeList from './components/EmployeeList';
import CloseButton from './components/CloseButton';
import * as Actions from './redux/actions';

class Employees extends Component {
  render() {
    const {
      selectEmployee,
      closeEmployee,
      selectTechnology,
      employees,
      selected
    } = this.props;

    return (
      <div>
        <CloseButton show={selected} onClick={closeEmployee} />
        <Typography type="headline" gutterBottom>
          { selected && selected.name || 'Employees' }
        </Typography>
        {!selected && <EmployeeList
          employees={employees}
          onSelectEmployee={selectEmployee}
        />}
        {selected && <Employee
          employee={selected}
          onSelectTechnology={selectTechnology}
        />}
      </div>
    )
  };
}

export default connect(
  state => ({
    employees: state.employees,
    selected: state.selectedEmployee,
  }),
  dispatch => ({
    selectEmployee(id) {
      dispatch(Actions.selectEmployee(id));
    },
    selectTechnology(id) {
      dispatch(Actions.selectTech(id));
    },
    closeEmployee(id) {
      dispatch(Actions.closeEmployee());
    },
  })
)(Employees)
