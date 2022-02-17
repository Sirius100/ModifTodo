// import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import styled from 'styled-components'
import {AppContext} from '../../app/App';
import { baseTheme } from '../../theme/theme';


const Wrapper = styled.div`
  width: 98%;
  height: 98%;
  margin-left: auto;
  margin-right: auto;
  border-width: 1px;
  border-style: solid;
  border-color: ${ props => props.brd ?
   baseTheme.borders.brdDark:
   baseTheme.borders.brdLight };
  transition: all, .9s;
`

export function WrapperTask() {
  const {themeBgBoolean} = useContext(AppContext)
  return (

      <Wrapper brd={themeBgBoolean.theme}/>

  )
}
