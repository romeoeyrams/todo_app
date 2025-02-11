import { useState } from "react";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map((task) => {
      if (id === task.id){
        return{...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(updatedTasks);
  }


  function deleteTask(id) {
    const remainingTask = tasks.filter((task) => id !==task.id);
    setTasks(remainingTask);
  }


  function addTask(name){
    const newTask = {id: `todo-${nanoid()}`, name, completed: false};
    setTasks([...tasks, newTask])
  }

  function editTask(id, newName){
    const editedTaskList = tasks.map((task) => {
      if(id === task.id){
        return{...task, name:newName };
      }
      return task;
    });
    setTasks(editedTaskList)
  }


  const taskList = tasks?.map((tasks) => (
    <Todo
      id={tasks.id}
      name={tasks.name}
      completed={tasks.completed}
      key={tasks.id}
      toggleTaskCompleted = {toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const tasksNoun = taskList.length <=1 ? "task" : "tasks";

  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
