import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Gallery = styled.section`
  background: #2d333f;
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
        <img src='http://lorempixel.com/640/480'></img>
      </Gallery>
    );
  }
}

export default BannerGallery;