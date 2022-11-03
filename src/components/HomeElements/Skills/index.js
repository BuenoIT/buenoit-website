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
          <SkillsH2>Project Management</SkillsH2>
          <SkillsP>
            .......................................................................
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Skills2} />
          <SkillsH2>Javascript Frameworks</SkillsH2>
          <SkillsP>
            .......................................................................
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Skills3} />
          <SkillsH2>Cloud Computing</SkillsH2>
          <SkillsP>
            .......................................................................
          </SkillsP>
        </SkillsCard>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
