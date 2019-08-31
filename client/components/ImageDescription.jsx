import React from 'react';
import styled from 'styled-components';

const FooterText = styled.div`
  float: left;
  max-width: 90%;
  margin: 0 8px 0 0;
  height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ImageDescription = ({ date, description }) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let dateObj = new Date(date);
  let month = monthNames[dateObj.getMonth() + 1];
  let fullDate = `${month} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

  return (
    <FooterText>
      <strong>{`${description}. `}</strong>{`${fullDate}`}
    </FooterText>
  );
};

export default ImageDescription;