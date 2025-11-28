import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete, onUpdate }) {
  if (!todos.length) return <p>Ingen opgaver endnu...</p>;

  return (
    <ul style={{ padding: 0, listStyle: "none" }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}
