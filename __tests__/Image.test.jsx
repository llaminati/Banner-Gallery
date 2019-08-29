import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Image from '../client/components/Image.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Image component', () => {
  test('renders without issue', () => {
    const wrapper = shallow(<Image />);

    expect(wrapper.exists()).toBe(true);
  });
});