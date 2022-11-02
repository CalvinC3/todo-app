import React from 'react'

const ThemeContext = React.createContext({
    theme: "en",
    setTheme: () => {}
  });

  export default ThemeContext;
