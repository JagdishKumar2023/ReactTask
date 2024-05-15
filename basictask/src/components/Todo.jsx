import React, { useReducer, useState } from "react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADDTODO": {
      return [
        ...state,
        { id: Date.now(), text: action.text, isComplete: false },
      ];
    }
    case "TOGGLE_TODO": {
      return [
        ...state.map((todo) => {
          todo.id === action.id ? { ...todo, isComplete: !isComplete } : todo;
        }),
      ];
    }
    case "REMOVE_TODO": {
      return [...state.filter((todo) => todo.id !== action.id)];
    }
    default:
      return state;
  }
};

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch({ type: "ADDTODO", text });
    }
    setText("");
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  console.log(todos);

  return (
    <>
      <h1>Todo App</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isComplete ? "line-through" : "none",
              }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
