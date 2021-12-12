import { useContext } from 'react';
import Header from './components/Header/Header';
import ThemeContext from './store/themeContext';

function App() {
  const ctx = useContext(ThemeContext);

  return (
    <>
      <Header onThemeSelection={ctx.onThemeChange} />
      <main className="App"></main>
    </>
  );
}

export default App;
