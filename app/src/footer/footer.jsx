import styled from 'styled-components'
import React, { useContext } from 'react';
import {baseTheme} from '../theme/theme';
import { AppContext } from '../app/App';

const ComponentFooter = styled.footer`
  width: 100vw;
  height: 10vh;
  background: ${ props => props.bg ?
   baseTheme.colors.bgDark :
   baseTheme.colors.bgLight};
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${ props => props.brd ?
   baseTheme.borders.brdDark:
   baseTheme.borders.brdLight };
  padding: 0 2em;
  transition: all, .9s;
`

export function Footer() {
  const {themeBgBoolean} = useContext(AppContext)
  return (

    <ComponentFooter brd={themeBgBoolean.theme} bg={themeBgBoolean.theme}/>

  )
}
