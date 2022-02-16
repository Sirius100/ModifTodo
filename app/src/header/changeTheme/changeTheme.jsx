// import styled from 'styled-components'
import React, { useReducer } from 'react'
import Form from 'react-bootstrap/Form'
import reducer from '../../reducer/reducer'


export const InitialTheme = {themeCaption:'Light'}
export const BtnChangeTheme = () => {

  const [state, dispatch] = useReducer( reducer,  InitialTheme)

  return (

      <Form>
        <Form.Check
            type="switch"
            id="custom-switch"
            label={state.themeCaption}
            style={{color:"lime"}}
            onChange={() => dispatch({type:'checkedBtnTheme'})}
        />
      </Form>

  )

}
