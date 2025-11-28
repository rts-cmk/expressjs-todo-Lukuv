export async function fetchTodos() {
  const res = await fetch("http://localhost:3000/todos"); // matcher Express
  return res.json();
}

export async function createTodo(todo) {
  const res = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  // hvis respons er tom, returnér objektet vi sendte
  if (res.status === 204) return todo;
  return res.json();
}

export async function updateTodoById(id, updates) {
  const res = await fetch(`http://localhost:3000/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return res.json();
}

export async function deleteTodoById(id) {
  await fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" });
}
