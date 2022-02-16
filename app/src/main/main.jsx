import styled from 'styled-components'
import React from 'react';
import { WrapperTask } from './wrapperTask/wrapperTask';

const ComponentMain = styled.main`
  width: 100vw;
  height: 80vh;
  background: #464451;
  text-align: center;
`


export function Main() {

  return (
    <ComponentMain>
      <WrapperTask/>
    </ComponentMain>

  )
}
