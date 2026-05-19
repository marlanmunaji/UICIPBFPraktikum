import './App.css'
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function App() {
  return (
    <div className="App">
      <h1>react-redux-hooks</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}
