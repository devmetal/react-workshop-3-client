import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Technology from './components/Technology';
import TechnologyList from './components/TechnologyList';
import CloseButton from './components/CloseButton';
import * as Actions from './redux/actions';

class Technologies extends Component {
  render() {
    const {
      selectTechnology,
      closeTechnology,
      selectEmployee,
      selected,
      technologies,
      dragStartTechnology,
      dragStopTechnology,
    } = this.props;

    return (
      <div>
        <CloseButton show={selected} onClick={closeTechnology} />
        <Typography type="headline">
          { (selected) ? selected.name : 'Technologies' }
        </Typography>
        {!selected && <TechnologyList
          stack={technologies}
          assignable={true}
          deletable={false}
          onSelectTechnology={selectTechnology}
          onDragStartTechnology={dragStartTechnology}
          onDragStopTechnology={dragStopTechnology}
        />}
        {selected && <Technology
          onSelectEmployee={selectEmployee}
          technology={selected}
        />}
      </div>
    );
  }
}

export default connect(
  state => ({
    technologies: state.technologies,
    selected: state.selectedTechnology,
  }),
  dispatch => ({
    selectTechnology(id) {
      dispatch(Actions.selectTech(id));
    },
    selectEmployee(id) {
      dispatch(Actions.selectEmployee(id));
    },
    closeTechnology() {
      dispatch(Actions.closeTech());
    },
    dragStartTechnology(id) {
      dispatch(Actions.dragStartTech(id));
    },
    dragStopTechnology() {
      dispatch(Actions.dragStopTech());
    },
  })
)(Technologies);
