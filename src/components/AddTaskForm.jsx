import React from "react";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";

const AddTaskForm = (props) => {

    let taskInput = React.createRef();

    const _submitForm = (event) => {
        event.preventDefault();
        props.addTask(taskInput.current.value);
    }

    return (
        <>
            <Container>
                <Form onSubmit={_submitForm}>
                    <Form.Group className="" controlId="formTaskInput">
                        <Form.Control type="text" placeholder="Enter a task" ref={taskInput}/>
                    </Form.Group>
                    <button type="submit">Add Task</button>
                </Form>
            </Container>
        </>
    );
}

export default AddTaskForm;