import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SlideshowImage from './SlideshowImage';

const Slideshow = styled.div`
  position: relative;
  width: 660px;
  display: flex;
  justify-content: center;
`;

const ScrollArrow = styled.div`
  color: #91949a;
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  cursor: pointer;
`;

const RightArrow = styled(ScrollArrow)`
  right: 0;
`;

const LeftArrow = styled(ScrollArrow)`
  left: 0;
`;

const ModalSlideshow = ({
  image, openReportImagePopup, changeLeftModal, changeRightModal,
}) => (
  <Slideshow>
    <LeftArrow onClick={() => changeLeftModal()}>{'<'}</LeftArrow>
    <SlideshowImage
      image={image}
      openReportImagePopup={openReportImagePopup}
    />
    <RightArrow onClick={() => changeRightModal()}>{'>'}</RightArrow>
  </Slideshow>
);

export default ModalSlideshow;

ModalSlideshow.propTypes = {
  openReportImagePopup: PropTypes.func.isRequired,
  changeLeftModal: PropTypes.func.isRequired,
  changeRightModal: PropTypes.func.isRequired,
  image: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dislike_flag: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    image_id: PropTypes.number.isRequired,
    inappropriate_flag: PropTypes.number.isRequired,
    listing_id: PropTypes.number.isRequired,
    unrelated_flag: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    user_submit: PropTypes.number.isRequired,
  }).isRequired,
};
