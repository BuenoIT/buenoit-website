import React from 'react';
import { CardCard, CardH1, CardH2, CardP } from './CardElements';

const Card = (props) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <CardCard>
      <CardH1>{props.title}</CardH1>
      <CardH2>Create on: {formatDate(props.dateCreate)}</CardH2>
      <CardH2>Last Update: {formatDate(props.dateUpdate)}</CardH2>
      <hr />
      <CardP>{props.description}</CardP>
    </CardCard>
  );
};

export default Card;
