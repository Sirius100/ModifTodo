// import PropTypes from 'prop-types';
import React, {useReducer, useContext} from 'react';
import reducer from '../../reducer/reducer'
import styled from 'styled-components'
import { Blockplus } from './blockplus/blockplus';
import { Blockminus } from './blockminus/blockminus';
import { DisplayF } from './display/display';
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

export const Context = React.createContext();

export function WrapperTask() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const {themeBgBoolean} = useContext(AppContext)
  return (

    <Context.Provider value={{state}}>
      <Wrapper brd={themeBgBoolean.theme}>
        <Blockminus onClick={() => dispatch({type:'minus'})}/>

        <DisplayF />

        <Blockplus onClick={() => dispatch({type:'plus'})}/>
      </Wrapper>
    </Context.Provider>


  )
}
