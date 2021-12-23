import React, { useReducer } from 'react';
import _ from 'lodash';

export const TaskContext = React.createContext({
  tasks: [],
  addTask: (task) => {},
  addList: (list) => {},
});
const defaultState = {
  tasksAndLists: [
    {
      list: 'default',
      selected: true,
      tasks: [],
    },
  ],
};

const activityReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const activeIndex = state.tasksAndLists.findIndex(
        (list) => list.selected === true
      );
      const updatedTasks = state.tasksAndLists
        .filter((list) => list.selected === true)[0]
        .tasks.concat(action.task);
      const updatedState = _.cloneDeep(state);
      updatedState.tasksAndLists[activeIndex].tasks = updatedTasks;
      return { ...updatedState };
    }

    default:
      return state;
  }
};

const TaskAndListProvider = ({ children }) => {
  const [activityState, dispatchActivity] = useReducer(
    activityReducer,
    defaultState
  );

  const addTaskHandler = (task) => {
    dispatchActivity({ type: 'ADD_TASK', task: task });
  };
  const addListHandler = (list) => {
    dispatchActivity({ type: 'ADD_LIST', list: list });
  };
  const activateListHandler = (activatedList) => {
    dispatchActivity({ type: 'ACTIVATE_LIST', active: activatedList });
  };
  const deleteTaskHandler = (id) => {
    dispatchActivity({ type: 'DELETE_TASK', id: id });
  };

  const defaultValues = {
    currentState: activityState,
    addTask: addTaskHandler,
    addList: addListHandler,
    deleteTask: deleteTaskHandler,
    activateList: activateListHandler,
  };

  return (
    <TaskContext.Provider value={defaultValues}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskAndListProvider;
