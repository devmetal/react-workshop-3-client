import React from 'react';
import TechnologyList from './TechnologyList';

export default ({
  onSelectTechnology,
  employee
}) => (
    <div>
      <TechnologyList
        onSelectTechnology={onSelectTechnology}
        stack={employee.stack}
      />
    </div>
  );
