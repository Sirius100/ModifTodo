import React, {useReducer} from 'react';
import styled from 'styled-components';


const Button = styled.button`
  width: 60px;
  height: 40px;
  color: red;
`

export const Blockminus = ({onClick})  => {
  return (

    <Button onClick={onClick}>
      -
    </Button>

  )
}
