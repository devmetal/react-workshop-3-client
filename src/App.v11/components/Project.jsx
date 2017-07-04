import React from 'react';
import Typography from 'material-ui/Typography';
import TechnologyList from './TechnologyList';
import EmployeeList from './EmployeeList';

export default ({
  onSelectEmployee,
  onSelectTechnology,
  project
}) => (
    <div>
      <Typography type="body1" gutterBottom>
        Description is not existing yet
      </Typography>
      <Typography type="title">
        In There:
      </Typography>
      <EmployeeList employees={project.inthere} onSelectEmployee={onSelectEmployee} />
      <Typography type="title">
        Requirements
      </Typography>
      <TechnologyList 
        stack={project.required} 
        assignable={false}
        deletable={false}
        onSelectTechnology={onSelectTechnology} 
      />
    </div>
  );
