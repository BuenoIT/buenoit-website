import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #676767;
  padding: 20px;
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
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 400px);
  align-items: center;
  grid-gap: 8px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
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
