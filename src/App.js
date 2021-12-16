import { useContext, useState } from 'react';
import ThemeContext from './store/themeContext';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Section from './components/Section/Section';
import TaskList from './components/Tasks/TaskList';

function App() {
  const ctx = useContext(ThemeContext);
  const [asideStatus, setAsideStatus] = useState(false);

  const asideHandler = () => {
    setAsideStatus((prevState) => (prevState === false ? true : false));
  };

  const menuHandler = () => {
    console.log('Menu enabled');
  };

  return (
    <>
      <Header
        onThemeSelection={ctx.onThemeChange}
        onAsideEnable={asideHandler}
      />
      <main className="App">
        {asideStatus && <Aside theme={ctx.darkTheme} />}
        <Section onMenuEnable={menuHandler}>
          <TaskList isAsideActive={asideStatus} />
        </Section>
      </main>
    </>
  );
}

export default App;
