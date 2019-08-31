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

    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    this.props.openModal(this.props.image);
  }

  render() {
    return (
      <div>
        {this.props.imageSize === 'small' ?
          <SmallImage
            src={this.props.image.url}
            onClick={() => this.handleOpenModal()}
          /> :
          <LargeImage
            src={this.props.image.url}
            onClick={() => this.handleOpenModal()}
          />
        }
      </div>
    );
  }
}

export default GalleryImage;