import React, { useContext } from 'react';
import styled from 'styled-components';
import {context} from '../wrapperTask';






const Button = styled.button`
  width: 60px;
  height: 40px;
  color: red;
`

export const Blockplus = ({onClick})  => {
  return (

    <Button onClick={onClick}>
      +
    </Button>

  )
}
