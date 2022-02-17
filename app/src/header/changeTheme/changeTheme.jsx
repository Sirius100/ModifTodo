import styled from 'styled-components'
import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form'
import { AppContext } from '../../app/App'
import {baseTheme} from '../../theme/theme'

const BriсkForm = styled.div`
  color: ${ props => props.colorCaption ?
    baseTheme.colorFont.thmDark:
    baseTheme.colorFont.thmLight }
`

export const BtnChangeTheme = () => {

  const {themeBgBoolean, handleBtnThemeClick} = useContext(AppContext);
  return (

    <BriсkForm colorCaption={themeBgBoolean.theme}>
      <Form>
        <Form.Check
            type="switch"
            id="custom-switch"
            label={themeBgBoolean.btnCaption}
            onChange={handleBtnThemeClick}
        />
      </Form>
    </BriсkForm>


  )

}
