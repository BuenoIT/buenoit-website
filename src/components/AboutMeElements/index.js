import React from 'react';
import { MyLifeSection } from './AboutMeElements';
import { SliderInfos } from './Data';
import { Carousel } from 'react-carousel-minimal';

const MyLife = (slides) => {
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '15px',
    fontWeight: 'bold',
  };
  return (
    <>
      <MyLifeSection>
        <Carousel
          data={SliderInfos}
          time={6000}
          width="900px"
          height="500px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            textAlign: 'center',
            maxWidth: '1000px',
            maxHeight: '500px',
            margin: '40px auto',
          }}
        />
      </MyLifeSection>
    </>
  );
};

export default MyLife;
