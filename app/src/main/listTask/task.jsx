import React from 'react';
import { PanelTask } from '../panelTask/panelTask'
import ListGroup from 'react-bootstrap/ListGroup';
import { v4 as uuidv4 } from 'uuid';



export const Task = React.memo(({tasks, dispatchAdd}) => {
  let tl = tasks.length;
  console.log('im run task ol: ', tl);
  return(

    <ListGroup as="ol" className="listGroup" value={tasks}>

      {tasks.map(
        task => (

          <PanelTask key={uuidv4()} task={task} dispatchTask={dispatchAdd} />

        ))}

    </ListGroup>
  )
})
