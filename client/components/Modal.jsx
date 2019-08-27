import React from 'react';
import styled from 'styled-components';

import ImageReportPopup from './ImageReportPopup.jsx';
import ImageScroll from './ImageScroll.jsx';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.9);
  z-index: 1001;
`;

const CloseModal = styled.button`
  position: absolute;
  padding: 25px;
  right: 0;
  top: 20px;
`;

const ImageInfoContainer = styled.div`
  width: 715px;
  margin: 35px auto 0 auto;
  z-index: 1002;
  display: flex;
  align-items: center;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportIsOpen: false
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.props.closeModal();
  }

  render() {
    return (
      <ModalContainer>
        <CloseModal
          onClick={this.handleCloseModal}
        ></CloseModal>
        <ImageInfoContainer>
          <ImageReportPopup />
          <ImageScroll
            image={this.props.image}
          />
        </ImageInfoContainer>
      </ModalContainer>
    );
  }
}

export default Modal;