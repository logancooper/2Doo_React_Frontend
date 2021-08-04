import './App.css';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      loadingTasks: true
    }
  }

  componentDidMount() {
    this._fetchTaskData();
  }

  _fetchTaskData = () => {
    console.log("fetching task data");
    this.setState({
      loadingTasks: true
    }, async () => {
      const url = "http://127.0.0.1:3000/tasks"
      const response = await fetch(url).then(response => response.json());
      console.log("RESPONSE FROM API IS: ", response);
      this.setState({
        tasks: response,
        loadingTasks: false
      })
    })
  }

  _postAddTaskData = async (task) => {
    const url = "http://127.0.0.1:3000/tasks/add";
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: task })
    };
    console.log("posting to " + url);
    const addTask = await fetch(url, requestOptions).then(response => response);
    if(addTask.status === 200)
    {
      this._fetchTaskData()
    }
  }

  _postDeleteTaskData = async (id) => {
    const url = "http://127.0.0.1:3000/tasks/delete";
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskID: id })
    };
    console.log("posting to " + url);
    const deleteTask = await fetch(url, requestOptions).then(response => response);
    if(deleteTask.status === 200)
    {
      this._fetchTaskData()
    }
  }

  _postToggleTaskComplete = async (id) => {
    const url = "http://127.0.0.1:3000/tasks/toggle-task-completed";
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskID: id })
    };
    console.log("posting to " + url);
    const completeTask = await fetch(url, requestOptions).then(response => response);
    if(completeTask.status === 200)
    {
      this._fetchTaskData()
    }
  }

  render() {
    return (
      <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
              2Doo
              </Navbar.Brand>
            </Container>
          </Navbar>
        <TaskList tasks={this.state.tasks} deleteTask={this._postDeleteTaskData} toggleTaskComplete={this._postToggleTaskComplete} loadingTasks={this.state.loadingTasks} />
        <AddTaskForm addTask={this._postAddTaskData} />
      </div>
    );
  }

}

export default App;
