import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  position: relative;
  width: 660px;
  display: flex;
  justify-content: center;
`;

const ImageFooter = styled.div`
  position: relative;
  margin: 8px 0 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

const ImageFooterText = styled.div`
  float: left;
  max-width: 90%;
  margin: 0 8px 0 0;
  height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;

class ImageDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleReportImagePopup = this.handleReportImagePopup.bind(this);
  }

  handleReportImagePopup() {
    this.props.openReportImagePopup();
  }

  render() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dateObj = new Date(this.props.image.date);
    let month = monthNames[dateObj.getMonth() + 1];
    let fullDate = `${month} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

    return (
      <div>
        <Image src={this.props.image.url}></Image>
        <ImageFooter>
          <ImageFooterText>
            <strong>{`${this.props.image.description}. `}</strong>{`${fullDate}`}
          </ImageFooterText>
          <Icon
            xmlns='html://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            onClick={this.handleReportImagePopup}
          >
            <path
              id='_24.Tiny_flag_icon'
              fill='#fff'
              date-name='24. Tiny Flag Icon'
              d='M485,475H469v12h-2V463h18l-3,6Zm-16-10v8h13l-2-4,2-4H469Z'
              transform='translate(-464 -463)'
            ></path>
          </Icon>
        </ImageFooter>
      </div>
    );
  }
}

export default ImageDescription;