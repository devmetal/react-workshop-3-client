import React from 'react';
import Avatar from 'material-ui/Avatar';
import EmployeeList from './EmployeeList';

export default ({
  onSelectEmployee,
  technology
}) => (
    <div>
      <Avatar alt={technology.name} src={technology.logo} />
      <EmployeeList employees={technology.usedBy} onSelectEmployee={onSelectEmployee} />
    </div>
  );
