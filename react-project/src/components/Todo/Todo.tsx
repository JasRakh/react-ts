import { useState } from "react";
import "./Todo.scss";

type TodoState = {
  id: number;
  text: string;
  completed: boolean;
};
const Todo = () => {
  const [todo, setTodo] = useState<TodoState[]>([]);
  const [text, setText] = useState<string>("");

  const addTodo = (text: string) => {
    if (text.trim().length) {
      const newTodo: TodoState = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodo([...todo, newTodo]);
      setText("");
    }
  };
  const removeTodo = (id: number) => {
    setTodo(todo.filter((todoId) => todoId.id !== id));
  };
  const toggleTodo = (id: number) => {
    setTodo(
      todo.map((todoId) => {
        if (todoId.id !== id) return todoId;
        return {
          ...todoId,
          completed: !todoId.completed,
        };
      }),
    );
  };
  return (
    <div className="todo">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button onClick={() => addTodo(text)}>Add item</button>
      <ul>
        {todo.map((todo: TodoState) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                toggleTodo(todo.id);
              }}
            />
            <span>{todo.text}</span>
            <span onClick={() => removeTodo(todo.id)} className="delete">
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
