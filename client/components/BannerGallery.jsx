import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

import GalleryImage from './GalleryImage.jsx';

const Gallery = styled.div`
  width: 1600px;
  height: 288px;
  display: flex;
  justify-content: center;
  background-color: #2d333f;
`;

class BannerGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    axios.get('/api/L1/banner/images')
      .then((res) => {
        this.setState({
          images: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Gallery>
        {this.state.images.map((image, i) => <GalleryImage key={i} image={image}/>)}
      </Gallery>
    );
  }
}

export default BannerGallery;