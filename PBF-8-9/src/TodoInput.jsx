import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodoAction } from "./redux";

const TodoInput = () => {

  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = todo => dispatch(addTodoAction(todo));

  const onChange = e => {
    setTodo(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (todo.trim() === "") alert("Please input todo");
    else {
      addTodo({
        id: uuid(),
        name: todo,
        complete: false
      });
    }
    setTodo("");
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>You have {todos.length} todos</h3>
      <input
        type="text"
        placeholder="add todo"
        value={todo}
        onChange={onChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;