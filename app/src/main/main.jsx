import styled from 'styled-components'
import React, {useContext} from 'react';
import {baseTheme} from '../theme/theme';
import { AppContext } from '../app/App';
import { WrapperTask } from './wrapperTask/wrapperTask';

const ComponentMain = styled.main`
  width: 100vw;
  height: 80vh;
  background: ${ props => props.bg ? baseTheme.colors.bgDark : baseTheme.colors.bgLight};
  text-align: center;
  transition: all, .6s;
`


export function Main() {

  const {themeBgBoolean} = useContext(AppContext)
  return (
    <ComponentMain bg={themeBgBoolean.theme}>
      <WrapperTask/>
    </ComponentMain>

  )
}
