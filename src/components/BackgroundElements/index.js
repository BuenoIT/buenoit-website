import React from 'react';
import { timelineElements } from './timelineData';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component/dist-modules';
import 'react-vertical-timeline-component/style.min.css';
import {
  BackgroundBtn,
  BackgroundFigCaption,
  BackgroundFigureWrap,
  BackgroundH1,
  BackgroundH3,
  BackgroundH5,
  BackgroundImg,
  BackgroundP,
  BackgroundP1,
  BackgroundWrap,
  BackgroundWrapLeft,
  BackgroundWrapper,
  BackgroundWrapRight,
} from './backgroundElements';
import { FaBriefcase, FaBookReader } from 'react-icons/fa';

const Background = () => {
  let workIconStyles = { background: '#6da8a7' };
  let schoolIconStyles = { background: '#6cd69c' };
  return (
    <BackgroundWrapper>
      <BackgroundH1>Gui's Timeline</BackgroundH1>
      <BackgroundP1>
        Below is a chronological list of my professional career
        <br />
        <br />
        <BackgroundBtn to="/">Go to home page</BackgroundBtn>
      </BackgroundP1>
      <br />

      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === 'work';
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <FaBriefcase /> : <FaBookReader />}
              animate={false}
            >
              <BackgroundWrap>
                <BackgroundWrapLeft>
                  <BackgroundH3>{element.title}</BackgroundH3>
                  <BackgroundH5>{element.location}</BackgroundH5>
                  <BackgroundP>
                    <div>
                      {' '}
                      <b>Achievements:</b>{' '}
                      {element.achievements?.map((sub) => {
                        return <div>{sub.name}</div>;
                      })}
                    </div>
                  </BackgroundP>
                  <BackgroundP>
                    <b>Description:</b> {element.decription}
                  </BackgroundP>
                </BackgroundWrapLeft>
                <BackgroundWrapRight>
                  <BackgroundFigureWrap>
                    <BackgroundImg
                      src={element.companyLogo}
                      alt={element.alt}
                    />
                    <BackgroundFigCaption>
                      {element.company}
                    </BackgroundFigCaption>
                  </BackgroundFigureWrap>
                </BackgroundWrapRight>
              </BackgroundWrap>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </BackgroundWrapper>
  );
};

export default Background;
