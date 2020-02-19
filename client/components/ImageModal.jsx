import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ReportImagePopup from './ReportImagePopup';
import ModalSlideshow from './ModalSlideshow';

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
    content: 'X';
    color: #6f737b;
    font-size: 1.2rem;
    line-height: 2;
    position: absolute;
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
    const { closeModal } = this.props;
    closeModal();
  }

  openReportImagePopup() {
    this.setState({ reportIsPopup: true });
  }

  closeReportImagePopup() {
    this.setState({ reportIsPopup: false });
  }

  render() {
    const { reportIsPopup } = this.state;
    const { image, changeLeftModal, changeRightModal } = this.props;
    return (
      <ModalContainer>
        <CloseModal onClick={this.handleCloseModal} />
        <ImageInfo>
          {reportIsPopup && <ReportImagePopup closeReportImagePopup={this.closeReportImagePopup} />}
          <ModalSlideshow
            image={image}
            openReportImagePopup={this.openReportImagePopup}
            changeLeftModal={changeLeftModal}
            changeRightModal={changeRightModal}
          />
        </ImageInfo>
      </ModalContainer>
    );
  }
}

export default ImageModal;

ImageModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  changeLeftModal: PropTypes.func.isRequired,
  changeRightModal: PropTypes.func.isRequired,
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
