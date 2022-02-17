import styled from 'styled-components'
import React, {useReducer, useEffect} from 'react';
import {BtnChangeTheme} from '../header/changeTheme/changeTheme'
import {Button} from 'react-bootstrap'
import reducer from '../reducer/reducer'
import {baseTheme} from '../theme/theme'

const ComponentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background: ${ props => props.bg ? baseTheme.colors.bgDark : baseTheme.colors.bgLight};
  border-bottom: 1px solid white;
  padding: 0 5em;
`
const InitialTheme = {theme: true}
export function Header() {
  const [stateThemeHeader, dispatch] = useReducer( reducer, InitialTheme)
  console.log("im run render: ", stateThemeHeader.theme)

  /*
   *нужно при изменении state.theme перерисовать компонент ComponentHeader,
   *но если явно указываю хуку useEffect через второй аргумент: [state.theme], запустить рендер то получается какая то светомузыка
   */
  useEffect( ()=> dispatch({type:'checkedBtnTheme'}), [])

  return (
    <ComponentHeader bg={stateThemeHeader.theme}>
      <Button variant="info">Menu</Button>{' '}
      <BtnChangeTheme />
    </ComponentHeader>

  )
}
