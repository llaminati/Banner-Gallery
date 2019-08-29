import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../client/components/Modal.jsx';

const props = {
  handleCloseModal: jest.fn()
};

describe('Modal component', () => {
  test('renders without issue', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.exists()).toBe(true);
  });

  test('expects handleCloseModal to be called', () => {
    const wrapper = shallow(<Modal closeModal={props.handleCloseModal}/>);
    const instance = wrapper.instance();
    instance.handleCloseModal();
    expect(props.handleCloseModal).toBeCalled();
  });
});