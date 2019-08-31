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
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        {this.props.imageSize === 'small' ?
          <SmallImage
            src={this.props.image.url}
            onClick={this.openModal}
          /> :
          <LargeImage
            src={this.props.image.url}
            onClick={this.openModal}
          />
        }
        {this.state.modalIsOpen &&
          <ImageModal
            image={this.props.image}
            closeModal={this.closeModal}
          />
        }
      </div>
    );
  }
}

export default GalleryImage;