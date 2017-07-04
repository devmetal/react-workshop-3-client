import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import CloseButton from './components/CloseButton';
import Technology from './components/Technology';
import TechnologyList from './components/TechnologyList';

class Technologies extends Component {
  render() {
    const {
      onSelectTechnology,
      onCloseTechnology,
      onSelectEmployee,
      selected,
      technologies,
    } = this.props;

    return (
      <div>
        <CloseButton show={selected} onClick={onCloseTechnology} />
        <Typography type="headline" gutterBottom>
          Technologies
        </Typography>
        {!selected && <TechnologyList
          stack={technologies}
          onSelectTechnology={onSelectTechnology}
        />}
        {selected && <Technology
          onSelectEmployee={onSelectEmployee}
          technology={selected}
        />}
      </div>
    );
  }
}

export default Technologies;
