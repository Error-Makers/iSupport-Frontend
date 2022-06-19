import React, { useState } from "react";

export const ThemeContext = React.createContext();
export default function ThemeProvider(props) {
  const [mode, setMode] = useState({
    default: "#FAFAFA",
    paper: "#FFFFFF",
    primary: "#673AB7",
    secondary: "#D1C4E9",
    accent: "#311B92",
    textPrimary: "rgba(0, 0, 0, 0.87)",
    textSecondary: "rgba(0, 0, 0, 0.54)",
    textField: "rgba(0, 0, 0, 0.42)",
  });

  function toggleDark() {
    setMode({
      default: "#303030",
      paper: "#424242",
      primary: "#311B92",
      secondary: "#006064",
      accent: "#AD1457",
      textPrimary: "rgba(0, 0, 0, 0.87)",
      textSecondary: "rgba(255,255,255,0.7)",
      textField: "rgba(0, 0, 0, 0.42)",
    });
  }
  function toggleLight() {
    setMode({
      default: "#FAFAFA",
      paper: "#FFFFFF",
      primary: "#673AB7",
      secondary: "#D1C4E9",
      accent: "#311B92",
      textPrimary: "rgba(0, 0, 0, 0.87)",
      textSecondary: "rgba(0, 0, 0, 0.54)",
      textField: "rgba(0, 0, 0, 0.42)",
    });
  }

  const state = { mode, toggleDark, toggleLight };

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  );
}
