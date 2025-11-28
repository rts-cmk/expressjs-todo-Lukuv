// src/hooks/useTodos.js
import { useEffect, useState } from "react";
import {
  fetchTodos,
  createTodo,
  updateTodoById,
  deleteTodoById,
} from "../services/api";

export function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  async function loadTodos() {
    const data = await fetchTodos();
    setTodos(data);
  }

  async function addTodo(title) {
    const newTodo = await createTodo({ title, status: "ikke færdig" });
    setTodos((prev) => [...prev, newTodo]);
  }

  async function updateTodo(id, updates) {
    const updated = await updateTodoById(id, updates);
    setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
  }

  async function deleteTodo(id) {
    await deleteTodoById(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return { todos, addTodo, updateTodo, deleteTodo };
}
