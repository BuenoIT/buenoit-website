import React from 'react';
import {
  CardCard,
  CardContainer,
  CardH1,
  CardH2,
  CardIcon,
  CardP,
  CardWrapper,
} from './CardElements';

const Card = (props) => {
  return (
    <CardContainer>
      <CardWrapper>
        <CardCard>
          <CardIcon />
          <CardH2>{props.title}</CardH2>
          <CardH2>{props.url}</CardH2>
          <CardP>{props.description}</CardP>
        </CardCard>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
