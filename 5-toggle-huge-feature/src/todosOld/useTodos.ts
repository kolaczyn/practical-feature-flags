import { useState } from "react";
import { Todo } from "./types";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(label: string) {
    const id = Date.now();
    setTodos((prev) => [...prev, { id, label, completed: false }]);
  }

  function toggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return {
    todos,
    addTodo,
    toggleTodo,
  };
}
