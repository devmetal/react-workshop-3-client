import React from 'react';
import CloseIcon from 'material-ui-icons/Clear';
import IconButtton from 'material-ui/IconButton';

export default ({ show, onClick }) => {
  if (!show) return null;

  return (
    <IconButtton
      aria-label="Close"
      style={{ float: 'right' }}
      onClick={onClick}
    >
      <CloseIcon />
    </IconButtton>
  )
}
