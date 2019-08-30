import React from 'react';
import styled from 'styled-components';

import ImageModal from './ImageModal.jsx';

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
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleGalleryPosition = this.handleGalleryPosition.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleGalleryPosition() {
    if (this.props.imageSize === 'small') {
      return <SmallImage src={this.props.image.url} onClick={this.openModal} />;
    } else {
      return <LargeImage src={this.props.image.url} onClick={this.openModal} />;
    }
  }

  render() {
    return (
      <div>
        {this.handleGalleryPosition()}
        {this.state.modalIsOpen &&
        <ImageModal
          image={this.props.image}
          closeModal={this.closeModal}
        />}
      </div>
    );
  }
}

export default GalleryImage;