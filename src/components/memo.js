import React from 'react';
import styled from 'styled-components';
import Remove from './remove';


const MemoContents = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const WritedTime = styled.span`
  flex: 1
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  font-size: 0.5rem;
`;

const MainText = styled.span`
  display: flex;
  margin: 0 1rem;
  flex: 8;
`

const Memo = ({item, id, remove}) => (
  <MemoContents>
    <WritedTime>{new Date().toLocaleDateString()}</WritedTime>
    <MainText className="memotext">{item}<Remove id={id} remove={remove} /></MainText>
  </MemoContents>
);

export default Memo;