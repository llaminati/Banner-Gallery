import React from 'react';

import ImageModal from './ImageModal.jsx';

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
        <img
          src={this.props.image.url}
          onClick={this.openModal}
        ></img>
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