import { useState } from "react";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";



function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name){
    const newTask = {id:"id", name, completed: false};
    setTasks([...tasks, newTask])
  }


  const tastList = tasks?.map((tasks) => (
    <Todo
      id={tasks.id}
      name={tasks.name}
      completed={tasks.completed}
      key={tasks.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tastList}
      </ul>
    </div>
  );
}

export default App;
