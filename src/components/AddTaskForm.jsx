import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const AddTaskForm = (props) => {
    const [show, setShow] = useState(false);
    let taskInput = React.createRef();

    const _submitForm = (event) => {
        event.preventDefault();
        props.addTask(taskInput.current.value);
        handleClose();
    }

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="" controlId="formTaskInput">
                            <Form.Control type="text" placeholder="Enter a task" ref={taskInput}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button onClick={_submitForm}>Add Task</Button>
                </Modal.Footer>
            </Modal>

            <Button onClick={handleOpen}>Add Task</Button>
        </>
    );
}

export default AddTaskForm;