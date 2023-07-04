import React, { createContext, useReducer } from "react";
import AppContainer from './common/containers/App';
import Routes from './routes';


export const ThemeContext = createContext();

const themeReducer = (mode, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      localStorage.theme = 'LIGHTMODE';
      return { darkMode: false };
    case "DARKMODE":
      localStorage.theme = 'DARKMODE'
      return { darkMode: true };
    default:
      return mode;
  }
};

const mode = localStorage.theme;

const initialState = {
  darkMode: Boolean(mode === 'DARKMODE'),
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return <ThemeContext.Provider value={{ state, dispatch }}>
    <AppContainer>
         <Routes />
      </AppContainer>
    </ThemeContext.Provider>;
}
