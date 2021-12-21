import React, { useState } from 'react';

const ThemeContext = React.createContext({
  darkTheme: false,
  onThemeChange: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);

  const themeChangeHandler = () => {
    setDarkThemeEnabled((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkTheme: darkThemeEnabled,
        onThemeChange: themeChangeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
