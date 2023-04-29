import { useEffect, useState } from "react";
import { Todo } from "./types";

const LOCAL_STORAGE_KEY = "todos";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[] | null>([]);

  useEffect(() => {
    console.log(todos);
    if (todos === null || todos.length === 0) return;
    writeToLocalStorage(todos);
  }, [todos]);

  useEffect(() => {
    readFromLocalStorage();
  }, []);

  function readFromLocalStorage() {
    // this is no perfect, because there's no guarantee that the data is valid, but it's good enough for this example
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) return;
    const savedTodos = JSON.parse(data) as Todo[];

    setTodos(savedTodos);
  }

  function writeToLocalStorage(todos: Todo[]) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }

  function addTodo(label: string) {
    const id = Date.now();
    setTodos((prev) => [...(prev ?? []), { id, label, completed: false }]);
  }

  function toggleTodo(id: number) {
    setTodos(
      (prev) =>
        prev?.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ) ?? []
    );
  }

  return {
    todos,
    addTodo,
    toggleTodo,
  };
}
