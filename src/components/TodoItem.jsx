export default function TodoItem({ todo, onDelete, onUpdate }) {
  function toggleStatus() {
    onUpdate(todo.id, {
      status: todo.status === "færdig" ? "ikke færdig" : "færdig",
    });
  }

  return (
    <li
      style={{
        marginBottom: "10px",
        background: "#f3f3f3",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <strong
        style={{
          textDecoration: todo.status === "færdig" ? "line-through" : "none",
        }}
      >
        {todo.title}
      </strong>

      <div style={{ marginTop: "5px" }}>
        <button onClick={toggleStatus} style={{ marginRight: "10px" }}>
          {todo.status === "færdig" ? "Gør ikke færdig" : "Gør færdig"}
        </button>

        <button onClick={() => onDelete(todo.id)} style={{ color: "red" }}>
          Slet
        </button>
      </div>
    </li>
  );
}
