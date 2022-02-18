import {useReducer, useRef} from 'react'
import reducer from '../../reducer/reducer'
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalDialog from 'react-bootstrap'
import  {Button}  from 'react-bootstrap'
import Fade from 'react-bootstrap/Fade'
import { PanelTask } from '../panelTask/panelTask'
import ListGroup from 'react-bootstrap/ListGroup';
import './listTask.css'

const ListTask = styled.div`
  width: 100%;
  text-align: center;
  /* height: 100%; */
`

export function ClistTask({mode, closedispatchTask }) {
  const textArea = useRef();
  const [tasks, dispatchAdd] = useReducer(reducer, [])


  const writeTasksState = ()=>{

    dispatchAdd({type:"addTask", payload:{
      id: tasks.length+1,
      time: new Date(),
      text: textArea.current.value,
    }});
    closedispatchTask({type:'add'})
  }
  console.log("tasks.time: ", tasks[0]?.time);
  return (

    <ListTask>
      <Fade in={mode}
      timeout={10000}
      unmountOnExit>
        <Modal.Dialog>
          <Modal.Header closeButton
          onHide={()=> closedispatchTask({type:'add'})}>
            <Modal.Title>Новая задача</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <textarea autoFocus type="text" ref={textArea} placeholder="Введите Вашу задачу"></textarea>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={()=> closedispatchTask({type:'add'})}>Close</Button>
            <Button variant="primary" onClick={writeTasksState}>Add Task</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Fade>
      <ListGroup as="ol" className="listGroup">
        {tasks.map( task => (<PanelTask key={task.id} tasks={task}/>) )}
      </ListGroup>
    </ListTask>
  )
}
