import React, {useEffect} from 'react'
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalDialog from 'react-bootstrap'
import  {Button}  from 'react-bootstrap'
import Fade from 'react-bootstrap/Fade'

const ListTask = styled.div`
  width: 100%;
  height: 100%;

`

export function ClistTask({mode}) {

  useEffect( ()=>{}, [mode])
  console.log("mode: ", mode);
  return (

    <ListTask>
      <Fade in={mode}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Новая задача</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
            <textarea type="text" placeholder="Введите задачу"></textarea>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Add Task</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Fade>

    </ListTask>
  )
}
