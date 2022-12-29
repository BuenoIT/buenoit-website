import React from 'react';
import Image from '../../images/pictureAboutMe.jpg';
import {
  AboutMeAnchor,
  AboutMeContainer,
  AboutMeContent1,
  AboutMeContent2,
  AboutMeContentBox,
  AboutMeDownloadIcon,
  AboutMeExtraContent,
  AboutMeExtraContentDownload,
  AboutMeExtraContentText,
  AboutMeImage,
  AboutMeMain,
} from './AboutMeElements';

const MyLife = () => {
  return (
    <>
      <AboutMeContainer>
        <AboutMeMain>
          <AboutMeImage src={Image} />
        </AboutMeMain>
        <AboutMeContentBox>
          <AboutMeContent1>
            The value of respect and dedicated work has always been taught to me
            by my father which has been working for many years at the same
            company.
            <br />
            In my early twenties, I received an offer to work for Walmart's IT
            department as a trainee. I was taught how to deal with complex
            projects and the importance of information technology in a business.
            In response to the global boom in e-commerce, I got promoted at
            Walmart and began managing different projects with their own
            complexities. In the years since I've been managing and reporting
            status to CEOs and Directors about innovative projects that have
            helped companies succeed.
            <br />
            As a project manager, I worked on projects for Walmart, CVS Health,
            AB-Inbev, Carters Oshkosh, Keyrus, and Dock partnering with
            companies like IBM, Oracle, SAP, and others.
          </AboutMeContent1>
          <AboutMeContent2>
            I decided to take on new challenges after working with developers
            and product owners for many years.
            <br />
            It is my aim in Canada to earn a diploma in computer programming and
            to find a job in the field as a developer.
            <br />
            Working hard and studying every day is what drives me to become
            better and to achieve my goals
          </AboutMeContent2>
        </AboutMeContentBox>
        <AboutMeExtraContent>
          <AboutMeExtraContentText>
            <p>
              {' '}
              Passionate about technology and wanting to contribute to the
              world's transformation.
            </p>
          </AboutMeExtraContentText>
          <AboutMeExtraContentDownload>
            <AboutMeAnchor>
              Download résumé
              <AboutMeDownloadIcon />
            </AboutMeAnchor>
          </AboutMeExtraContentDownload>
        </AboutMeExtraContent>
      </AboutMeContainer>
    </>
  );
};

export default MyLife;
