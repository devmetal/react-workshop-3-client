import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import CloseButton from './components/CloseButton';
import Employee from './components/Employee';
import EmployeeList from './components/EmployeeList';

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
        <CloseButton show={selected} onClick={onCloseEmployee} />
        <Typography type="headline" gutterBottom>
          Employees
        </Typography>
        {!selected && <EmployeeList
          employees={employees}
          onSelectEmployee={onSelectEmployee}
        />}
        {selected && <Employee
          employee={selected}
          onSelectTechnology={onSelectTechnology}
        />}
      </div>
    )
  };
}

export default Employees;
