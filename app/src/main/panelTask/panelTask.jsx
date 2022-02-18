import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import './panelTask.css';

export function PanelTask({tasks, key}) {

  return(
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start ListGroupItem"
      key={Symbol(key).toString()}
    >
      <div className="ms-2 me-auto bodyTextTask">
        <div className="fw-bold bodyTextTask">{tasks.time.toLocaleTimeString()}</div>
        {tasks.text}
      </div>
      <Badge bg="primary" pill>
      {tasks.id}
      </Badge>
    </ListGroup.Item>
  )

}
