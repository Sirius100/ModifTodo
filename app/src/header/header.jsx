import styled from 'styled-components';
import React, {useContext} from 'react';
import {BtnChangeTheme} from '../header/changeTheme/changeTheme';
import {Button} from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {baseTheme} from '../theme/theme';
// import {Menu} from './overlayTrigger/overlay';
import { AppContext } from '../app/App';

const ComponentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background: ${ props => props.bg ? baseTheme.colors.bgDark : baseTheme.colors.bgLight};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${ props => props.brd ?
   baseTheme.borders.brdDark:
   baseTheme.borders.brdLight };
  padding: 0 5em;
  transition: all, .6s;
`

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Hello Human</Popover.Header>
    <Popover.Body>
      Эта кнопка тут не просто так!&nbsp;
      <strong>Она без функционала,&nbsp;</strong>
      просто для дизайна.
    </Popover.Body>
  </Popover>
);

const OverlayTriggerInsideButton = React.memo( () => {
  return(
    <>
      <OverlayTrigger trigger="click" placement="right" overlay= {popover}>
        <Button variant="info">Menu</Button>
      </OverlayTrigger>
    </>
  )
})

export function Header() {

  const {themeBgBoolean} = useContext(AppContext)

  return (
    /**
     * bg - background сайта
     * brd - border разделов
     */
    <ComponentHeader bg={themeBgBoolean.theme} brd={themeBgBoolean.theme}>
      <OverlayTriggerInsideButton/>
      <BtnChangeTheme />
    </ComponentHeader>

  )
}
