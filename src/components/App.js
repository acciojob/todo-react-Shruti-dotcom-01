
import React from "react";
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const inputRef = React.useRef(null);

  const handleClickAddTodo = () => {
    const inputTodo = inputRef.current.value;
    if (inputTodo === "") return;
    if (todos.includes(inputTodo)) return;
    setTodos((prev) => [...prev, inputTodo]);
  };

  const handleClickDeleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="todo-container">
      <h1>To Do List</h1>
      <section className="add-todo">
        <input ref={inputRef} type="text" />
        <button onClick={handleClickAddTodo}>Add Todo</button>
      </section>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <p>{todo}</p>
            <button onClick={() => handleClickDeleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );

}

export default App
