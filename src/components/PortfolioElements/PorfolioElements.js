import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #676767;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const CardH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const CardWrapper = styled.div`
  //max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 400px);
  align-items: center;
  grid-gap: 8px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CardAnchor = styled.a`
  text-decoration: none;
  color: black;
`;
