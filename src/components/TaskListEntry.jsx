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
import React from "react";
import Form from "react-bootstrap/Form";

const TaskListEntry = (props) => {
    const { task } = props;
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteModalShow(false);
    const handleDeleteModalOpen = () => setDeleteModalShow(true);

    let dateInput = React.createRef();
    const [cloneModalShow, setCloneModalShow] = useState(false);
    const handleCloneModalClose = () => setCloneModalShow(false);
    const handleCloneModalOpen = () => setCloneModalShow(true);

    const _handleClone = () => {
        if(!dateInput.current.value)
        {
            alert("Please enter a due date.");
        }
        else
        {
            props.addTask(task.content, dateInput.current.value, true);
            handleCloneModalClose();
        }
    }
    return (
        <>
            <Modal show={deleteModalShow} onHide={handleDeleteModalClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        Are you sure you want to delete this task?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteModalClose}>Cancel</Button>
                    <Button variant="danger" onClick={() => props.deleteTask(task.id)}>Delete Task</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={cloneModalShow} onHide={handleCloneModalClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Clone Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        Please enter a new due date for the cloned task.
                        <Form.Control type="date" ref={dateInput}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloneModalClose}>Cancel</Button>
                    <Button variant="info" onClick={_handleClone}>Clone Task</Button>
                </Modal.Footer>
            </Modal>

            <Container className="todo-card-container">
                    <Card >
                        <Card.Body>
                            <Row>
                                <Col md="auto">{task.completed ? (<ToggleButton className="toggle-button" variant="success" type="checkbox" checked={task.completed} onClick={() => props.toggleTaskComplete(task.id)}>✓</ToggleButton>) : (<ToggleButton className="toggle-button" variant="outline-success" type="checkbox" checked={task.completed} onClick={() => props.toggleTaskComplete(task.id)}></ToggleButton>)}</Col>
                                <Col md="auto">{task.favorited ? (<ToggleButton className="toggle-button" variant="warning" type="checkbox" checked={task.favorited} onClick={() => props.toggleTaskFavorite(task.id)}>✓</ToggleButton>) : (<ToggleButton className="toggle-button" variant="outline-warning" type="checkbox" checked={task.favorited} onClick={() => props.toggleTaskFavorite(task.id)}></ToggleButton>)}</Col>
                                <Col md={4}><Card.Text>{task.content}</Card.Text></Col>
                                {!!task.has_due_date && ((new Date(task.due_date).getTime() > new Date().getTime()) ? (<Col md="auto"><Card.Text>Due Date: {format(new Date(task.due_date), "MM/dd/yyyy")}</Card.Text></Col>) : (<Col md="auto"><Card.Text>Overdue: {format(new Date(task.due_date), "MM/dd/yyyy")}</Card.Text></Col>))}
                                <Col md="auto"><Button className="delete-task-button" variant="danger" onClick={() => handleDeleteModalOpen()}>🗑️</Button></Col>
                                <Col md="auto"><Button className="clone-task-button" variant="info" onClick={() => handleCloneModalOpen()}>📋</Button></Col>
                            </Row>
                        </Card.Body>
                    </Card>
            </Container>
        </>
    );
}

export default TaskListEntry;