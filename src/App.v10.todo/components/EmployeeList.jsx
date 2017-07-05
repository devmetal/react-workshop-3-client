import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';

export default ({
  onSelectEmployee,
  employees = []
}) => (
    <List>
      {!!employees.length && employees.map(employee => (
        <ListItem key={employee.id} onClick={() => onSelectEmployee(employee.id)} button>
          <ListItemText primary={employee.name} />
        </ListItem>
      ))}
    </List>
  );
