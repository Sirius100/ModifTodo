import styled from 'styled-components';
import React, {useContext} from 'react';
import {BtnChangeTheme} from '../header/changeTheme/changeTheme';
import {Button} from 'react-bootstrap';
import {baseTheme} from '../theme/theme';
import { AppContext } from '../app/App';

const ComponentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background: ${ props => props.bg ? baseTheme.colors.bgDark : baseTheme.colors.bgLight};
  border-bottom: 1px solid white;
  padding: 0 5em;
  transition: all, .6s;
`
export function Header() {

  const {themeBgBoolean} = useContext(AppContext)

  return (
    <ComponentHeader bg={themeBgBoolean.theme}>
      <Button variant="info">Menu</Button>{' '}
      <BtnChangeTheme />
    </ComponentHeader>

  )
}
