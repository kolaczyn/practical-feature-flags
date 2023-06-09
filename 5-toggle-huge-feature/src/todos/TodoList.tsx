import { useRef } from "react";
import { TodoInput } from "./TodoInput";
import { useTodos } from "./useTodos";

export function TodoList() {
  const { addTodo, todos, toggleTodo } = useTodos();

  const ref = useRef<HTMLInputElement>(null);

  function handleAddTodo() {
    if (!ref.current) return;
    const label = ref.current.value;
    if (label === "") return;
    addTodo(label);
  }

  return (
    <>
      <input ref={ref} />
      <button onClick={handleAddTodo}>Brand New Todos</button>
      <br />
      <span>(the todos are saved as you make them!</span>
      {todos?.map((todo) => (
        <TodoInput
          completed={todo.completed}
          id={todo.id}
          handleToggle={() => toggleTodo(todo.id)}
          label={todo.label}
          key={todo.id}
        />
      ))}
    </>
  );
}
