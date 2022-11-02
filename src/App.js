import React, { useState, useContext } from 'react';
import './App.css';
import cx from 'classnames'
import ThemeSelector from './components/ThemeSelector';
import TodoForm from './components/TodoForm';
import CardList from './components/CardList';

import ThemeContext from './app/ThemeContext';
import { InitializeStorage } from './app/api';

function App() {
  const [theme, setTheme] = useState("dark")
  const value = { theme, setTheme }
  InitializeStorage()

  return (
    <ThemeContext.Provider value={value}>
      <div className={theme === 'dark' ? "bg-dark" : "bg-light"}>
        <div className={cx(
          "App", theme === 'dark' ? "dark-theme" : "light-theme"
        )}>
          <div className="App-header">
            <ThemeSelector />
          </div>
          <div className="body-wrapper">

            <div className='content-wrapper'>
              <TodoForm />
              <CardList />
            </div>
          </div>
        </div>
      </div>

    </ThemeContext.Provider>
  );
}

export default App;
