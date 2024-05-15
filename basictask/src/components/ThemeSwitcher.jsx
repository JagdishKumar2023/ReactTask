import React, { useReducer } from "react";

// Initial state for theme
const initialState = {
  darkMode: false,
};

// Reducer function to manage theme state
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const ThemeSwitcher = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Event handler to toggle theme
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div className={state.darkMode ? "dark-theme" : "light-theme"}>
      <h2>Theme Switcher</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
