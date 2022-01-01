import React, { useState, useEffect } from 'react';

const ThemeContext = React.createContext({
  darkTheme: false,
  onThemeChange: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const preExistingTheme =
    JSON.parse(localStorage.getItem('taskTrackerDevGeoTheme')) || false;

  const [darkThemeEnabled, setDarkThemeEnabled] = useState(preExistingTheme);

  useEffect(() => {
    localStorage.setItem('taskTrackerDevGeoTheme', darkThemeEnabled);
  }, [darkThemeEnabled]);

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
