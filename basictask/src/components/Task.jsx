import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case "RESET": {
      return initialState;
    }
    default:
      return state;
  }
};

const Task = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", name: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Task;
