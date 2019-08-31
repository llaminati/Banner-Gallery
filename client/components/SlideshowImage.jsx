import React from 'react';
import styled from 'styled-components';

import ImageFooter from './ImageFooter.jsx';

const ImageContainer = styled.div`
  margin: 14px 0 14px 0;
`;

const Image = styled.img`
  width: 526px;
  margin: 0 32px 0 32px;
`;

const SlideshowImage = ({ image, openReportImagePopup }) => {
  return (
    <ImageContainer>
      <Image src={image.url}></Image>
      <ImageFooter
        image={image}
        openReportImagePopup={openReportImagePopup}
      />
    </ImageContainer>
  );
};

export default SlideshowImage;