import React from 'react';
import styled from 'styled-components';

import ReportImagePopup from './ReportImagePopup.jsx';
import ImageDescription from './ImageDescription.jsx';

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
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &::before {
    font-family: icons;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    content: 'U';
    color: #6f737b;
    font-size: 1.2rem;
    line-height: 2;
    position: absolute;
    text-align: center;
    top: 16px;
    right: 16px;
    width: 2rem;
  }
`;

const ImageInfo = styled.div`
  width: 715px;
  margin: 35px auto 0 auto;
  z-index: 1002;
  display: flex;
  align-items: center;
`;

class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportIsPopup: false,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.openReportImagePopup = this.openReportImagePopup.bind(this);
    this.closeReportImagePopup = this.closeReportImagePopup.bind(this);

  }

  handleCloseModal() {
    this.props.closeModal();
  }

  openReportImagePopup() {
    this.setState({ reportIsPopup: true });
  }

  closeReportImagePopup() {
    this.setState({ reportIsPopup: false });
  }

  render() {
    return (
      <ModalContainer>
        <CloseModal
          onClick={this.handleCloseModal}
        ></CloseModal>
        <ImageInfo>
          {this.state.reportIsPopup &&
          <ReportImagePopup
            closeReportImagePopup={this.closeReportImagePopup}
          />}
          <ImageDescription
            image={this.props.image}
            openReportImagePopup={this.openReportImagePopup}
          />
        </ImageInfo>
      </ModalContainer>
    );
  }
}

export default ImageModal;