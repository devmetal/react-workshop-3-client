import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';

export default ({
  onSelectProject,
  projects = []
}) => (
    <List>
      {!!projects.length && projects.map(project => (
        <ListItem key={project.id} onClick={() => onSelectProject(project.id)} button>
          <ListItemText primary={project.name} />
        </ListItem>
      ))}
    </List>
  );
