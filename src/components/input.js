import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  flex: 4;
  flex-direction: row;
  margin: 0 auto;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 800;
`;

const Text = styled.input`
  margin: 1rem;
  width: 12rem;
  height: 2rem;
`

const Input = ({getInputData}) => (
  <Wrapper>
    <Contents>
      <form>
        <label>메모를 입력해주세요 </label>
        <Text 
          className="text"
          type="text"
          placeholder="메모를 입력바람!"
        />
        <button onClick={getInputData}>입력</button>
      </form>
    </Contents>
  </Wrapper>
)

export default Input;