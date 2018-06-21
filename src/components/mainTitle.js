import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  width: 100%;
  height: 4rem;
`;

const Contnets = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #82b74b;
  color: white;
  font-size: 2rem;
  font-family: 'Nanum Pen Script', cursive;
`;


const Title = () => (
  <TitleWrapper>
    <Contnets> 봉구 메모장s</Contnets>
  </TitleWrapper>
);

export default Title;