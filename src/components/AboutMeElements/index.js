import React from 'react';
import { MyLifeH2, MyLifeSection } from './AboutMeElements';
import { SliderInfos } from './CarrouselData';
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
      {' '}
      <MyLifeH2>
        I am an experienced IT project manager interested in software
        development because of the passion and dedication I have seen in
        developers throughout my career. My goal as a developer is to make a
        positive impact on an organization through teamwork, hard work,
        problem-solving, and adaptability. <br />
        <br />
        At the moment, I am living in Canada. I am near the end of my diploma in
        computer programming. This allows me to be prepared for a career change.
      </MyLifeH2>
      <MyLifeSection>
        <Carousel
          data={SliderInfos}
          time={6000}
          width="1000px"
          height="600px"
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
