import TaskListEntry from "../components/TaskListEntry";

const TaskList = (props) => {
    return (
        <>
            {props.tasks.map((task) => (
                <TaskListEntry key={task.id} task={task} deleteTask={props.deleteTask} toggleTaskComplete={props.toggleTaskComplete}/>
            ))}
        </>
    );
}

export default TaskList;