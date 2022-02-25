import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Fade from 'react-bootstrap/Fade'
import {Trash} from './trash';
import './panelTask.css';

const Task = styled(ListGroup.Item)`
  position: relative;
  background: ${ props => props.isComplete? "hsla(190, 73%, 71%, 1);": "white"};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  transition: all 1s;
`

export function PanelTask({task, dispatchTask}) {

  const day = {0:"Вск", 1:"Пн", 2:"Вт", 3:"Ср", 4:"Чт", 5:"Пт", 6:"Сб"};
  // отмечаю задачу выполненой


  const readyTask = ()=>{
    task.isComplete = !task.isComplete;
    dispatchTask({type:"isComplete"})
  }

  // удаляю задачу
  const deleteTask = ()=>{
    task.isDelete= !task.isDelete;
    dispatchTask({type:"isDelete"})

  }
  return(
      <Task
        as="li"
        className="d-flex justify-content-between align-items-start ListGroupItem list-group-item"
        isComplete={task.isComplete}
      >
        <div className="ms-2 me-auto bodyTextTask">
          <div className="fw-bold bodyTextTask">{task.time.toLocaleTimeString()}</div>
          {task.text}
        </div>

        <Fade in={task.isComplete}
          timeout={500}
          unmountOnExit>
          <div className="wrapperTrash" onClick={deleteTask}>
            <Trash/>
          </div>
        </Fade>

        <Badge bg="primary" pill>
        {/*день недели*/}
        {day[task.time.getDay()]}
        </Badge>
        <input type="checkbox" checked={task.isComplete} id="readyTask" onChange={readyTask} />
      </Task>
  )

}

// export const PanelTask = React.memo(MPanelTask, []);
