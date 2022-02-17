// import styled from 'styled-components'
import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form'
import { AppContext } from '../../app/App'

export const BtnChangeTheme = () => {


  const {themeBgBoolean, handleBtnThemeClick} = useContext(AppContext);
  return (

      <Form>
        <Form.Check
            type="switch"
            id="custom-switch"
            label={themeBgBoolean.btnCaption}
            style={{color:"lime"}}
            onChange={handleBtnThemeClick}
        />
      </Form>

  )

}
