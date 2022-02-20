import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Fade from 'react-bootstrap/Fade'
import {Trash} from './trash';
import './panelTask.css';

const Task = styled(ListGroup.Item)`
  position: relative;
  background: ${ props => props.isComplete? "lime": "white"};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`

export function PanelTask({task, dispatchAdd}) {

  const readyTask = ()=>{
    task.isComplete = !task.isComplete;
    dispatchAdd({type:"isComplete"})
  }
  const deleteTask = ()=>{
    console.log("im delete");
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
        timeout={3000}
        unmountOnExit>
        <div className="wrapperTrash" onClick={deleteTask}>
          <Trash/>
        </div>
      </Fade>

      <Badge bg="primary" pill>
      {task.id}
      </Badge>
      <label htmlFor="readyTask">
        <input type="checkbox" id="readyTask" onChange={readyTask} />
      </label>

    </Task>
  )

}
