import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SmallImage = styled.img`
  width: 142px;
  margin: 0 0 0 .25rem;
`;

const LargeImage = styled.img`
  width: 288px;
  margin: 0 0 0 .25rem;
`;

class GalleryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    const { openModal, image } = this.props;
    openModal(image);
  }

  render() {
    const { imageSize, image } = this.props;
    return (
      <div>
        {imageSize === 'small' ? <SmallImage src={image.url} onClick={() => this.handleOpenModal()} /> : <LargeImage src={image.url} onClick={() => this.handleOpenModal()} />}
      </div>
    );
  }
}

export default GalleryImage;

GalleryImage.propTypes = {
  openModal: PropTypes.func.isRequired,
  imageSize: PropTypes.string.isRequired,
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
