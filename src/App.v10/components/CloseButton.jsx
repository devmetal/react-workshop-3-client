import React from 'react';
import IconButtton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Clear';

export default ({ show, onClick }) => {
  if (!show) return null;

  return (
    <IconButtton
      aria-label="Close"
      style={{ float: 'right', marginTop: '-8px' }}
      onClick={onClick}
    >
      <CloseIcon />
    </IconButtton>
  )
}
