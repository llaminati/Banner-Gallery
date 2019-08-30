import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import GalleryImage from './GalleryImage.jsx';

const Gallery = styled.div`
  width: 1598px;
  height: 288px;
  justify-content: center;
  display: flex;
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
        <div>
          {this.state.images.slice(0, 2).map((image, i) => <GalleryImage key={i} imageSize={'small'} image={image}/>)}
        </div>
        {this.state.images.slice(2, 3).map((image, i) => <GalleryImage key={i} imageSize={'large'} image={image}/>)}
        <div>
          {this.state.images.slice(3, 5).map((image, i) => <GalleryImage key={i} imageSize={'small'} image={image}/>)}
        </div>
        {this.state.images.slice(5, 6).map((image, i) => <GalleryImage key={i} imageSize={'large'} image={image}/>)}
        <div>
          {this.state.images.slice(6, 8).map((image, i) => <GalleryImage key={i} imageSize={'small'} image={image}/>)}
        </div>
        {this.state.images.slice(8, 9).map((image, i) => <GalleryImage key={i} imageSize={'large'} image={image}/>)}
        {this.state.images.slice(9, 10).map((image, i) => <GalleryImage key={i} imageSize={'large'} image={image}/>)}
      </Gallery>
    );
  }
}

export default BannerGallery;