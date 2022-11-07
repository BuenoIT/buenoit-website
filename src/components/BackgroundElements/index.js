import React from 'react';
import { timelineElements } from './timelineData';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component/dist-modules';
import 'react-vertical-timeline-component/style.min.css';
import {
  BackgroundH1,
  BackgroundH3,
  BackgroundH5,
  BackgroundP,
  BackgroundWrapper,
} from './backgroundElements';
import { FaBriefcase, FaChalkboardTeacher } from 'react-icons/fa';

const Background = () => {
  return (
    <>
      <BackgroundWrapper>
        <BackgroundH1>Gui's Timeline</BackgroundH1>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === 'work';
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                icon={isWorkIcon ? <FaBriefcase /> : <FaChalkboardTeacher />}
              >
                <BackgroundH3>{element.title}</BackgroundH3>
                <BackgroundH5>{element.location}</BackgroundH5>
                <BackgroundP>{element.decription}</BackgroundP>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </BackgroundWrapper>
    </>
  );
};

export default Background;
