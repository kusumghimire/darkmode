import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import "../styles/_main.scss"

export default function SwitchButton() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <button className={`app__dark-mode-btn ${darkMode ? "light" : "icon"}`} onClick={onClick}>
      {darkMode ? <FontAwesomeIcon icon={faSun} color="#FFA500" /> : <FontAwesomeIcon icon={faMoon} />}
    </button>
  );
}
