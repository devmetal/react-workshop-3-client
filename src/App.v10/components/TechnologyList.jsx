import React from 'react';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemText } from 'material-ui/List';

export default ({
  onSelectTechnology,
  stack = []
}) => (
    <List>
      {!!stack.length && stack.map(tech => (
        <ListItem key={tech.id} onClick={() => onSelectTechnology(tech.id)} button>
          <Avatar alt={tech.name} src={tech.logo} />
          <ListItemText primary={tech.name} />
        </ListItem>
      ))}
    </List>
  );
