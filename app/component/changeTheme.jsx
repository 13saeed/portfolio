"use client"
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext();

export const useTheme = ()=>{
  return useContext(ThemeContext)
}

export const ThemeProvider =({children})=>{
  const [theme , setTheme]=useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );

}


