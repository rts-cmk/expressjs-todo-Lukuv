import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { useTodos } from "./hooks/useTodos";

export default function App() {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodos();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>TODO App</h1>

      <AddTodoForm onAdd={addTodo} />

      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
    </div>
  );
}
