import React, {useContext} from 'react';
import styled from 'styled-components';
import {Context} from "../wrapperTask"


const Display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: blue;
  font-size: 40px;
  color: red;
`

export const DisplayF = ()  => {
  const {state} = useContext(Context)

  return (

    <Display>
      {state.count}
    </Display>

  )
}
