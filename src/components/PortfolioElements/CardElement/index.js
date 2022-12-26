import React from 'react';
import { CardCard, CardH1, CardH2, CardIcon, CardP } from './CardElements';

const Card = (props) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <CardCard>
      <CardH1>{props.title}</CardH1>
      <CardIcon src={props.image} alt={props.alt} />
      <CardP>
        <b>Create on:</b> {formatDate(props.dateCreate)}
      </CardP>
      <CardP>
        <b>Last Update:</b> {formatDate(props.dateUpdate)}
      </CardP>
      <CardP>
        <b>Language:</b> {props.language}
      </CardP>
      <CardP>
        <b>Framework:</b> {props.framework}
      </CardP>
      <CardH2>{props.description}</CardH2>
    </CardCard>
  );
};

export default Card;
