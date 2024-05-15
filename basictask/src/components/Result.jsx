import React, { useReducer } from "react";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { isLoggedIn: true, user: action.user };
    case "logout":
      return { isLoggedIn: false, user: null };
    default:
      throw new Error();
  }
};

const Auth = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = () => {
    // Simulate login process
    setTimeout(() => {
      dispatch({ type: "login", user: { name: "John Doe" } });
    }, 1000);
  };

  const handleLogout = () => {
    // Simulate logout process
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1000);
  };

  return (
    <div>
      {state.isLoggedIn ? (
        <div>
          <p>Welcome, {state.user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
