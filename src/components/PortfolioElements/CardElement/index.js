import React from 'react';
import { CardCard, CardH2, CardIcon, CardP } from './CardElements';

const Card = (props) => {
  return (
    <CardCard>
      <CardIcon />
      <CardH2>{props.title}</CardH2>
      <CardH2>{props.url}</CardH2>
      <CardP>{props.description}</CardP>
    </CardCard>
  );
};

export default Card;
