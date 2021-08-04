import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ToggleButton from "react-bootstrap/ToggleButton";
import { format } from 'date-fns';

const TaskListEntry = (props) => {
    const { task } = props;
    return (
        <>
            <Container>
                <Card>
                    <Card.Body>
                        Completed: {task.completed.toString()}
                        <ToggleButton variant="outline-primary" type="checkbox" checked={task.completed} onClick={() => props.toggleTaskComplete(task.id)}>Completed</ToggleButton>
                        <Card.Title>Task: {task.content}</Card.Title>
                        <Card.Text>{format(new Date(task.date_created), "'Created on' eeee")}</Card.Text>
                        <Card.Text>{format(new Date(task.due_date), "'Due on' eeee")}</Card.Text>
                        <Button variant="danger" onClick={() => props.deleteTask(task.id)}>Delete Task</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default TaskListEntry;