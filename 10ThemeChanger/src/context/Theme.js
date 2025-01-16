import { createContext, useContext } from "react";

export const ThemeContext = createContext({     // we can give a default value to the context for initial state
  themeMode: "light",        // default variable
  darkTheme: () => {},      // these are the method we get this whenever call a context
  lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}