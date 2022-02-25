// import PropTypes from 'prop-types';
import React, {useReducer, useContext} from 'react';
import reducer from '../../reducer/reducer';
import { Button } from 'react-bootstrap';
import { ClistTask } from '../listTask/listTask';
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
  padding-top: 1em;
  transition: all, .9s;
  overflow-y: scroll;
`

const AddButton = React.memo(({dispatchTask}) => {
  return(
    <>
      <Button variant="danger" onClick={ ()=> dispatchTask({type:'add'})}>
        Add
      </Button>
    </>
  )
})

export const WrapperTask = () => {

  const [AddTask, dispatchTask] = useReducer(reducer, {visibleForm: false})
  const {themeBgBoolean} = useContext(AppContext)

  return (

      <Wrapper brd={themeBgBoolean.theme}>
        <AddButton dispatchTask={dispatchTask}/>
        <ClistTask mode={AddTask.visibleForm} closeDispatchTask={dispatchTask}/>
      </Wrapper>

  )
}
