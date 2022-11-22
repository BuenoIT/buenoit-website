import React from 'react';
import Skills1 from '../../../images/skills1.svg';
import Skills2 from '../../../images/skills2.svg';
import Skills3 from '../../../images/skills3.svg';
import {
  SkillsCard,
  SkillsContainer,
  SkillsH1,
  SkillsH2,
  SkillsIcon,
  SkillsP,
  SkillsWrapper,
} from './SkillsElements';

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsH1>Hard Skills</SkillsH1>
      <SkillsWrapper>
        <SkillsCard>
          <SkillsIcon src={Skills1} />
          <SkillsH2> Project Management </SkillsH2>
          <SkillsP>
            {' '}
             Experience managing complex initiatives for multinational companies
            for seven years{' '}
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Skills2} />
          <SkillsH2>Javascript Frameworks</SkillsH2>
          <SkillsP>
            {' '}
            A passion for building websites with React, Redux, Jquery, VUE,
            Angular and Node JS{' '}
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Skills3} />
          <SkillsH2>Cloud Computing</SkillsH2>
          <SkillsP>Knowledge working with Google Cloud and AWS</SkillsP>
        </SkillsCard>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
