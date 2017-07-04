import React from 'react';
import { mount } from 'enzyme';
import { MuiThemeProvider } from 'material-ui/styles';
import EditableName from '../EditableName'

describe('Editable name component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MuiThemeProvider>
        <EditableName title="Test" />
      </MuiThemeProvider>
    );
  })

  it('Present the Typography tag with content of title', () => {
    expect(wrapper.find('Typography')).toHaveText('Test');
  });

  describe('Editing', () => {
    describe('Click on Typography tag', () => {
      beforeEach(() => {
        wrapper.find('Typography').simulate('click');
      })

      it('the input appear instead of Typography', () => {
        expect(wrapper.find('Typography')).not.toBePresent();
        expect(wrapper.find('input')).toBePresent();
      });
    });
  });
});
