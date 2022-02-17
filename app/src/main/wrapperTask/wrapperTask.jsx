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
const counter = {count: 0}

export function WrapperTask() {
  const [state, dispatch] = useReducer(reducer, counter);

  const handleBtnPlus = () => {
    dispatch({type:'plus'})
  }
  const handleBtnMinus = () => {
    dispatch({type:'minus'})
  }
  return (

    <Context.Provider value={{state}}>
      <Wrapper>
        <Blockminus onClick={handleBtnMinus}/>

        <DisplayF />

        <Blockplus onClick={handleBtnPlus}/>
      </Wrapper>
    </Context.Provider>


  )
}
