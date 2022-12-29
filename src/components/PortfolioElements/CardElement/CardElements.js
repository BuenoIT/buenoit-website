import styled from 'styled-components';

export const CardCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  height: 420px;
  width: 100%;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border: solid #42c920 5px;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CardIcon = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

export const CardH2 = styled.h2`
  font-size: 0.9rem;
  font-weight: 200;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
`;

export const CardP = styled.p`
  font-size: 0.8rem;
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
`;

export const CardH1 = styled.h1`
  font-size: 30px;
  border-radius: 20%;
  border: solid #eee 5px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;
