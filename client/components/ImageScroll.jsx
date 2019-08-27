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

class ImageScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Image src={this.props.image.url}></Image>
        <ImageFooter>
          <strong>
            {this.props.image.description}
          </strong>
          this.props.image.date
        </ImageFooter>
      </div>
    );
  }
}

export default ImageScroll;