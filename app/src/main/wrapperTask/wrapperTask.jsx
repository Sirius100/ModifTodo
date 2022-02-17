// import PropTypes from 'prop-types';
import React, {useReducer} from 'react';
import reducer from '../../reducer/reducer'
import styled from 'styled-components'
import { Blockplus } from './blockplus/blockplus';
import { Blockminus } from './blockminus/blockminus';
import { DisplayF } from './display/display';



const Wrapper = styled.div`
  width: 98%;
  height: 98%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid, white;
`

export const Context = React.createContext();

export function WrapperTask() {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (

    <Context.Provider value={{state}}>
      <Wrapper>
        <Blockminus onClick={() => dispatch({type:'minus'})}/>

        <DisplayF />

        <Blockplus onClick={() => dispatch({type:'plus'})}/>
      </Wrapper>
    </Context.Provider>


  )
}
