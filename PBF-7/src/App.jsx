import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@mui/material/Typography';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useTodoState from './hooks/useTodoState';
import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function App() {

  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">

      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
