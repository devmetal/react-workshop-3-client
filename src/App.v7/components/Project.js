import React from 'react';
import Typography from 'material-ui/Typography';
import EmployeeList from './EmployeeList';
import TechnologyList from './TechnologyList';

export default ({
  onSelectEmployee,
  onSelectTechnology,
  project
}) => (
    <div>
      <Typography type="title" gutterBottom>
        {project.name}
      </Typography>
      <Typography type="body1">
        Description is not existing yet
      </Typography>
      <hr />
      <Typography type="title" gutterBottom>
        In There:
      </Typography>
      <EmployeeList employees={project.inthere} onSelectEmployee={onSelectEmployee} />
      <hr />
      <Typography type="title" gutterBottom>
        Requirements
      </Typography>
      <TechnologyList stack={project.required} onSelectTechnology={onSelectTechnology} />
    </div>
  );
