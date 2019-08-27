import React from 'react';

import Modal from './Modal.jsx';

class Image extends React.Component {
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
        <Modal
          image={this.props.image}
          closeModal={this.closeModal}
        />}
      </div>
    );
  }
}

export default Image;