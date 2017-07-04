import React from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from 'material-ui/List';

export default ({
  onSelectTechnology,
  onDragStartTechnology,
  onDragStopTechnology,
  onDeleteTechnology,
  assignable,
  deletable,
  stack = []
}) => (
    <List>
      {!!stack.length && stack.map(tech => (
        <ListItem
          button
          key={tech.id}
          onClick={() => onSelectTechnology(tech.id)}
        >
          <Avatar
            onDragStart={assignable && (() => onDragStartTechnology(tech.id))}
            onDragEnd={assignable && (() => onDragStopTechnology())}
            draggable={assignable}
            alt={tech.name}
            src={tech.logo}
          />

          {deletable &&
            <ListItemSecondaryAction>
              <IconButton aria-label="Comments">
                <DeleteIcon onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDeleteTechnology(tech.id);
                }} />
              </IconButton>
            </ListItemSecondaryAction>
          }

          <ListItemText primary={tech.name} />
        </ListItem>
      ))}
    </List>
  );
