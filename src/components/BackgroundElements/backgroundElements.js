import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const BackgroundWrapper = styled.div`
  background: linear-gradient(168deg, #d8ece4 0%, #378e6a 100%);
  color: black;
`;

export const BackgroundH1 = styled.h1`
  font-size: 7em;
  text-align: center;
`;

export const BackgroundBtn = styled(LinkR)`
  text-align: center;
  border-radius: 50px;
  background: #42c920;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #313131;
  }
`;
export const BackgroundP1 = styled.p`
  text-align: center;
`;

export const BackgroundH3 = styled.h3`
  padding-top: 0.25em;
`;

export const BackgroundH5 = styled.h5``;

export const BackgroundP = styled.p``;

export const BackgroundWrap = styled.div`
  display: flex;
`;

export const BackgroundWrapLeft = styled.div``;

export const BackgroundWrapRight = styled.div`
  display: flex;
  align-items: center;
`;

export const BackgroundImg = styled.img`
  width: 80px;
  height: 80px;
  margin: 5px;
`;

export const BackgroundFigureWrap = styled.figure``;

export const BackgroundFigCaption = styled.figcaption`
  text-align: center;
  font-size: 13px;
  font-weight: lighter;
`;
