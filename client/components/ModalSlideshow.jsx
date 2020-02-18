import React from 'react';
import styled from 'styled-components'

import SlideshowImage from './SlideshowImage.jsx';

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

const ModalSlideshow = ({ image, openReportImagePopup, changeLeftModal, changeRightModal }) => {
  return (
    <Slideshow>
      <LeftArrow
        onClick={() => changeLeftModal()}
      >{'<'}</LeftArrow>
      <SlideshowImage
        image={image}
        openReportImagePopup={openReportImagePopup}
      />
      <RightArrow
        onClick={() => changeRightModal()}
      >{'>'}</RightArrow>
    </Slideshow>
  );
};

export default ModalSlideshow;