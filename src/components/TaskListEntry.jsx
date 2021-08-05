import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ToggleButton from "react-bootstrap/ToggleButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { format } from 'date-fns';
import '../css/ToDo.css';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

const TaskListEntry = (props) => {
    const { task } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        Are you sure you want to delete this task?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={() => props.deleteTask(task.id)}>Delete Task</Button>
                </Modal.Footer>
            </Modal>

            <Container className="todo-card-container">
                    <Card >
                        <Card.Body>
                            <Row>
                                <Col md="auto">{task.completed ? (<ToggleButton className="toggle-button" variant="success" type="checkbox" checked={task.completed} onClick={() => props.toggleTaskComplete(task.id)}>✓</ToggleButton>) : (<ToggleButton className="toggle-button" variant="outline-success" type="checkbox" checked={task.completed} onClick={() => props.toggleTaskComplete(task.id)}></ToggleButton>)}</Col>
                                <Col md={4}><Card.Text>{task.content}</Card.Text></Col>
                                <Col md="auto"><Card.Text>{format(new Date(task.date_created), "'Created on' eeee")}</Card.Text></Col>
                                <Col md="auto"><Card.Text>{format(new Date(task.due_date), "'Due on' eeee")}</Card.Text></Col>
                                <Col md="auto"><Button className="delete-task-button" variant="danger" onClick={() => handleOpen()}>🗑</Button></Col>
                            </Row>
                        </Card.Body>
                    </Card>
            </Container>
        </>
    );
}

export default TaskListEntry;