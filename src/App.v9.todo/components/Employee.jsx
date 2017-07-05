import React from 'react';
import Typography from 'material-ui/Typography';
import TechnologyList from './TechnologyList';

export default ({
  onSelectTechnology,
  employee
}) => (
    <div>
      <Typography type="title">
        {employee.name}
      </Typography>
      <hr />
      <TechnologyList
        onSelectTechnology={onSelectTechnology}
        stack={employee.stack}
      />
    </div>
  );
