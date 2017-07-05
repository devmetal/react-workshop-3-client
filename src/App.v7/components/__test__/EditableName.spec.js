import React from 'react';
import { mount } from 'enzyme';
import EditableName from '../EditableName'

describe('Editable name component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <EditableName title="Test" />
    );
  })

  it('Present the h1 tag with content of title', () => {
    expect(wrapper.find('h1')).toHaveText('Test');
  });

  describe('Editing', () => {
    describe('Click on h1 tag', () => {
      beforeEach(() => {
        wrapper.find('h1').simulate('click');
      })

      it('input tag visible instead of h1', () => {
        expect(wrapper.find('h1')).not.toBePresent();
        expect(wrapper.find('input')).toBePresent();
      });

      it('done button appear', () => {
        expect(wrapper.find('.done')).toBePresent();
      });
    });

    describe('Press done button', () => {
      beforeAll(() => {
        wrapper.find('.done').simulate('click');
      })

      it('h1 tag visible instead of input', () => {
        expect(wrapper.find('h1')).toBePresent();
        expect(wrapper.find('input')).not.toBePresent();
      });

      it('done button disappear', () => {
        expect(wrapper.find('.done')).not.toBePresent();
      });
    });
  });
});
