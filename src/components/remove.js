import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  margin-left: auto;
  background-color: red;
  color: white;
  font-weight: 800;

  &:hover {
    background-color: white;
    color: red;
  }
`; 

const Remove = (props) => (
  <Button id={props.id} onClick={props.remove(this.id)}>X</Button>
);

export default Remove;