import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ImageFooter from './ImageFooter';

const Image = styled.img`
  width: 526px;
  margin: 0 32px 0 32px;
`;

const SlideshowImage = ({ image, openReportImagePopup }) => {
  const ImageContainer = styled.div`
    margin: ${image.user_submit ? '0 0 14px 0' : '14px 0 14px 0'}
  `;

  return (
    <ImageContainer image={image}>
      <Image src={image.url} />
      <ImageFooter
        image={image}
        openReportImagePopup={openReportImagePopup}
      />
    </ImageContainer>
  );
};

export default SlideshowImage;

SlideshowImage.propTypes = {
  openReportImagePopup: PropTypes.func.isRequired,
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
