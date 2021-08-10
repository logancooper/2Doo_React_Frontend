import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const AddTaskForm = (props) => {
    
    const [show, setShow] = useState(false);
    const [hasDueDateInput, setHasDueDateInput] = useState(false);
    let taskInput = React.createRef();
    let dateInput = React.createRef();

    const _submitForm = (event) => {
        event.preventDefault();
        if(!hasDueDateInput)
        {
            props.addTask(taskInput.current.value, null, hasDueDateInput);
            handleClose();
        }
        else
        {
            if(!dateInput.current.value)
            {
                alert("Please enter a due date.");
            }
            else
            {
                props.addTask(taskInput.current.value, dateInput.current.value, hasDueDateInput);
                handleClose();
            }

        }
    }

    const handleClose = () => 
    {   setShow(false) 
        setHasDueDateInput(false)
    };
    const handleOpen = () => setShow(true);
    const handleDueDateInputChange = (e) => {setHasDueDateInput(e.target.checked)};

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} data-testid="addTaskModal">
                <Modal.Header closeButton>
                    <Modal.Title>Create Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="" controlId="formTaskInput">
                            <Form.Label>Enter Task Details</Form.Label>
                            <Form.Control type="text" placeholder="Enter a task" ref={taskInput} data-testid="addTaskDescriptionText"/>
                        </Form.Group>
                        <Form.Group className="" controlId="formTaskInput">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Check onChange={handleDueDateInputChange} type="checkbox" label="Has Due Date"/>
                            <Form.Control type="date" ref={dateInput}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button onClick={_submitForm} data-testid="addTaskButton">Add Task</Button>
                </Modal.Footer>
            </Modal>

            <Button 
            onClick={handleOpen}
            data-testid="addTaskModalOpenButton"
            >Add Task</Button>
        </>
    );
}

export default AddTaskForm;