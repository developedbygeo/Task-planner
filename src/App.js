import { useContext, useState } from 'react';
import ThemeContext from './store/themeContext';
import TaskAndListProvider from './store/taskContext';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Section from './components/Section/Section';
import TaskList from './components/Tasks/TaskList';
import ModalDialogue from './components/Tasks/AddTask';

function App() {
  const ctx = useContext(ThemeContext);
  const [asideStatus, setAsideStatus] = useState(false);
  const [isAddMenuEnabled, setAddMenuEnabled] = useState(false);
  const [isDeleteMenuEnabled, setDeleteMenuEnabled] = useState(false);

  const asideHandler = () => {
    setAsideStatus((prevState) => !prevState);
  };

  const addMenuEnableHandler = () => {
    setAddMenuEnabled(true);
  };

  const MenuDisableHandler = () => {
    if (isAddMenuEnabled) {
      setAddMenuEnabled(false);
    } else {
      setDeleteMenuEnabled(false);
    }
  };

  const removeMenuEnableHandler = () => {
    setDeleteMenuEnabled(true);
  };

  const resetFields = (refArray) => {
    refArray.map((ref) => (ref.current.value = ''));
  };

  return (
    <>
      <TaskAndListProvider>
        {isAddMenuEnabled && (
          <ModalDialogue
            add={true}
            onFormReset={resetFields}
            onMenuDisable={MenuDisableHandler}
          />
        )}
        {isDeleteMenuEnabled && (
          <ModalDialogue add={false} onMenuDisable={MenuDisableHandler} />
        )}
        <Header
          onThemeSelection={ctx.onThemeChange}
          onAsideEnable={asideHandler}
        />
        <main className="App">
          {asideStatus && (
            <Aside onFormReset={resetFields} theme={ctx.darkTheme} />
          )}
          <Section
            onMenuEnable={addMenuEnableHandler}
            onRemoveMenuEnable={removeMenuEnableHandler}
          >
            <TaskList isAsideActive={asideStatus} />
          </Section>
        </main>
      </TaskAndListProvider>
    </>
  );
}

export default App;
