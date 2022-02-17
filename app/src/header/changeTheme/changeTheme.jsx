// import styled from 'styled-components'
import React, { useReducer } from 'react'
import Form from 'react-bootstrap/Form'
import reducer from '../../reducer/reducer'


export const InitialThemeName = {themeCaption:'Light'}
export const BtnChangeTheme = () => {

  const [stateBtnChangeTheme, dispatch] = useReducer( reducer,  InitialThemeName)

  return (

      <Form>
        <Form.Check
            type="switch"
            id="custom-switch"
            label={stateBtnChangeTheme.themeCaption}
            style={{color:"lime"}}
            onChange={() => dispatch({type:'checkedBtnTheme'})}
        />
      </Form>

  )

}
