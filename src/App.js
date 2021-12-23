import { useContext, useState } from 'react';
import ThemeContext from './store/themeContext';
import TaskAndListProvider from './store/taskContext';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Section from './components/Section/Section';
import TaskList from './components/Tasks/TaskList';
import AddTask from './components/Tasks/AddTask';

function App() {
  const ctx = useContext(ThemeContext);
  const [asideStatus, setAsideStatus] = useState(false);
  const [isMenuEnabled, setMenuEnabled] = useState(false);

  const asideHandler = () => {
    setAsideStatus((prevState) => !prevState);
  };

  const menuEnableHandler = () => {
    setMenuEnabled(true);
  };

  const menuDisableHandler = () => {
    setMenuEnabled(false);
  };

  const resetFields = (refArray) => {
    refArray.map((ref) => (ref.current.value = ''));
  };

  return (
    <>
      <TaskAndListProvider>
        {isMenuEnabled && (
          <AddTask
            onFormReset={resetFields}
            onMenuDisable={menuDisableHandler}
          />
        )}
        <Header
          onThemeSelection={ctx.onThemeChange}
          onAsideEnable={asideHandler}
        />
        <main className="App">
          {asideStatus && (
            <Aside onFormReset={resetFields} theme={ctx.darkTheme} />
          )}
          <Section onMenuEnable={menuEnableHandler}>
            <TaskList isAsideActive={asideStatus} />
          </Section>
        </main>
      </TaskAndListProvider>
    </>
  );
}

export default App;
