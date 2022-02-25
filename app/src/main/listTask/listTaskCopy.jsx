import {useReducer, useRef, useMemo} from 'react'
import reducer from '../../reducer/reducer'
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'
import  {Button}  from 'react-bootstrap'
import Fade from 'react-bootstrap/Fade'
import { PanelTask } from '../panelTask/panelTask'
import ListGroup from 'react-bootstrap/ListGroup';
import { v4 as uuidv4 } from 'uuid';
import './listTask.css'

const ListTask = styled.div`
  width: 100%;
  text-align: center;
  transition: all, .6s;
`

export function ClistTask({mode, closeDispatchTask }) {
  const textArea = useRef();
  const [tasks, dispatchAdd] = useReducer(reducer, [])


  const writeTasksState = ()=>{
    if(!textArea.current.value){
      closeDispatchTask({type:'add'});
      return;
    }
    dispatchAdd({type:"addTask", payload:{
      id: tasks.length+1,
      time: new Date(),
      text: textArea.current.value,
      isComplete: false,
      isDelete: false,
    }});
    closeDispatchTask({type:'add'})
  }

  return (

    <ListTask>
      <Fade in={mode}
      timeout={200}
      unmountOnExit>
        <Modal.Dialog>
          <Modal.Header closeButton
          onHide={()=> closeDispatchTask({type:'add'})}>
            <Modal.Title>Новая задача</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <textarea autoFocus type="text" ref={textArea} placeholder="Введите Вашу задачу"></textarea>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={()=> closeDispatchTask({type:'add'})}>Close</Button>
            <Button variant="primary" onClick={writeTasksState}>Add Task</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Fade>

      <ListGroup as="ol" className="listGroup" value={tasks}>


        {tasks.map(
          task => (

            <PanelTask key={uuidv4()} task={task} dispatchTask={dispatchAdd} />

          ))}


      </ListGroup>
    </ListTask>
  )
}
