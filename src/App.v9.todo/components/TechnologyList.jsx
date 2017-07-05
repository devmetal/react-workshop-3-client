import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';

export default ({
  onSelectTechnology,
  stack = []
}) => (
    <List>
      {!!stack.length && stack.map(tech => (
        <ListItem key={tech.id} onClick={() => onSelectTechnology(tech.id)} button>
          <ListItemText primary={tech.name} />
        </ListItem>
      ))}
    </List>
  );
