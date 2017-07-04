import React from 'react';
import Typography from 'material-ui/Typography';
import EmployeeList from './EmployeeList';

export default ({
  onSelectEmployee,
  technology
}) => (
    <div>
      <Typography type="title">
        {technology.name}
      </Typography>
      <Typography type="body1">
        Technology description
      </Typography>
      <hr />
      <EmployeeList employees={technology.usedBy} onSelectEmployee={onSelectEmployee} />
    </div>
  );
