import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@material-ui/core";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // trim() gets rid of whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
      //   console.log(todo.id);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default TodoForm;
