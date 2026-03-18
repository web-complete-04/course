import { useEffect, useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import type { Todo } from "./types";

import styles from './Todos.module.css';

const apiUrl = `${import.meta.env.VITE_API_URL}/todos`;

export function Todos() {
  const [todos, setTodos] = useState<Todo[] | null>(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!todos) return;

    const form = e.target;

    const data = new FormData(form);
    const title = data.get("title");

    const newTodo = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, completed: false }),
    }).then((res) => res.json());

    setTodos([...todos, newTodo]);
  }

  async function handleTodoComplete(todo: Todo) {
    await fetch(`${apiUrl}/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !todo.completed }),
    });
  }

  async function handleDeleteTodo(todo: Todo) {
    if (!todos) return;

    await fetch(`${apiUrl}/${todo.id}`, {
      method: "DELETE",
    });

    const newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
  }

  if (!todos) {
    return <strong>Loading...</strong>;
  }

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">What do you want to do?</label>{" "}
        <input type="text" placeholder="Todo Title" name="title" id="title" />
        <button type="submit">
          Add Todo <FcTodoList size={10} />
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label className={styles.todoItem}>
              <input
                type="checkbox"
                name="completed"
                defaultChecked={todo.completed}
                onChange={() => handleTodoComplete(todo)}
              />{" "}
              {todo.title}
            </label>{" "}
            <button type="button" onClick={() => handleDeleteTodo(todo)}>
              <MdDeleteForever />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
