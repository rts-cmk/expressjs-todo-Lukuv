import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

// Få absolut sti til projektroden (hvor server.js ligger)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Absolut sti til todos.json
const FILE_PATH = path.resolve(__dirname, "data", "todos.json");

// Læs todos
function readTodos() {
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, "[]"); // opret fil hvis mangler
  }
  const data = fs.readFileSync(FILE_PATH, "utf8");
  return JSON.parse(data);
}

// Skriv todos
function writeTodos(todos) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
  console.log("✅ Gemt i:", FILE_PATH);
}

// GET
app.get("/todos", (req, res) => {
  res.json(readTodos());
});

// POST
app.post("/todos", (req, res) => {
  const todos = readTodos();
  const newTodo = { id: Date.now(), ...req.body };
  todos.push(newTodo);
  writeTodos(todos);
  res.json(newTodo);
});

// PUT
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let todos = readTodos();
  todos = todos.map(t => t.id === id ? { ...t, ...req.body } : t);
  writeTodos(todos);
  const updated = todos.find(t => t.id === id);
  res.json(updated);
});

// DELETE
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let todos = readTodos();
  todos = todos.filter(t => t.id !== id);
  writeTodos(todos);
  res.status(204).end();
});

app.listen(3000, () => console.log("🚀 Server kører på port 3000"));
