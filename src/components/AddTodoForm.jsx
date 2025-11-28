import { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [title, setTitle] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    console.log("Sender title:", title);

    await onAdd(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
      <input
        name="title"
        type="text"
        placeholder="Skriv en todo…"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoComplete="off"
      />
      <button type="submit">Tilføj</button>
    </form>
  );
}
