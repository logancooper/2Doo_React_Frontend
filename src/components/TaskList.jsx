import TaskListEntry from "../components/TaskListEntry";

const TaskList = (props) => {
    return (
        <>
            {props.tasks.map((task) => (
                <TaskListEntry key={task.id} 
                task={task} 
                deleteTask={props.deleteTask} 
                toggleTaskComplete={props.toggleTaskComplete} 
                toggleTaskFavorite={props.toggleTaskFavorite}
                addTask={props.addTask}
                />
            ))}
        </>
    );
}

export default TaskList;