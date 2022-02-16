import styled from 'styled-components'
import React, {useEffect, useReducer} from 'react';
import {BtnChangeTheme} from '../header/changeTheme/changeTheme'
import {Button} from 'react-bootstrap'
import reducer from '../reducer/reducer'


const ComponentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background: ${props => props.bg ? "#464451" : "white"};
  border-bottom: 1px solid white;
  padding: 0 5em;
`
const InitialTheme = {theme: false}
export function Header() {
  const [state, dispatch] = useReducer( reducer, InitialTheme)
  console.log("mckdsmc")
  // useEffect( ()=> dispatch({type:'checkedBtnTheme'}),[state.theme])
  return (
    <ComponentHeader bg={state.theme}>
      <Button variant="info">Menu</Button>{' '}
      <BtnChangeTheme/>
    </ComponentHeader>

  )
}
