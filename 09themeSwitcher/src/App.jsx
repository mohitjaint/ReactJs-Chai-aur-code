import { useEffect } from 'react';
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeButton from './components/ThemeButton';
import Card from './components/Card';
import React from 'react';

function App() {
  const [themeMode, setThemeMode] = React.useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };useEffect(()=>{
    document.querySelector('html').classList.remove('light', 'dark');

    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  // actual change in theme 

  React.useEffect(() => {
      document.querySelector('html').classList.remove("dark", "light");
      document.querySelector('html').classList.add(themeMode);
  
    
  }, [themeMode]);

  return (
    <ThemeProvider value = {{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeButton/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card/>
            </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
