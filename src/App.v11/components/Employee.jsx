import React from 'react';
import TechnologyList from './TechnologyList';

export default ({
  onSelectTechnology,
  onDropTechnology,
  onDeleteTechnology,
  employee
}) => (
    <div
      onDragOver={e => e.preventDefault()}
      onDrop={() => onDropTechnology(employee.id)}
    >
      <TechnologyList
        onSelectTechnology={onSelectTechnology}
        onDeleteTechnology={techId => onDeleteTechnology(techId, employee.id)}
        stack={employee.stack}
        assignable={false}
        deletable={true}
      />
    </div>
  );
