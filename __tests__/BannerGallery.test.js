import React from 'react';
import { shallow, configure } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';

import BannerGallery from '../client/components/BannerGallery.jsx';

jest.mock('axios', () => {
  const imageData = [
    {
      'id': 34,
      'url': 'https://llaminati-images.s3-us-west-1.amazonaws.com/14.jpg',
      'description': 'quidem repellat magni',
      'user_submit': 0,
      'date': '2019-04-15T07:00:00.000Z',
      'unrelated_flag': 0,
      'inappropriate_flag': 0,
      'dislike_flag': 0,
      'listing_id': 1,
      'image_id': 14
    },
  ];

  return {
    get: jest.fn(() => Promise.resolve({ data: imageData })),
  };
});

describe('BannerGallery component', () => {
  test('renders without issue', () => {
    const wrapper = shallow(<BannerGallery />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should fetch a list of images', () => {
    const getSucess = jest.spyOn(axios, 'get');
    const wrapper = shallow(<BannerGallery />);
    expect(getSucess).toBeCalled();
  });
});