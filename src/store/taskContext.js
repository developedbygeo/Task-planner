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
  const updatedState = _.cloneDeep(state);
  switch (action.type) {
    case 'ADD_TASK': {
      const activeIndex = state.tasksAndLists.findIndex(
        (list) => list.selected === true
      );
      const updatedTasks = state.tasksAndLists
        .filter((list) => list.selected === true)[0]
        .tasks.concat(action.task);
      updatedState.tasksAndLists[activeIndex].tasks = updatedTasks;
      return { ...updatedState };
    }
    case 'ADD_LIST': {
      const newObject = { list: action.list, selected: true, tasks: [] };
      updatedState.tasksAndLists.map((list) => (list.selected = false));
      updatedState.tasksAndLists.push(newObject);
      return { ...updatedState };
    }
    case 'DELETE_TASK': {
      const activeListIndex = state.tasksAndLists.findIndex(
        (list) => list.selected === true
      );
      // TODO need to implement obj id
      const taskToBeDel = state.tasksAndLists[activeListIndex].tasks.findIndex(
        (obj) => obj.id === action.id
      );
      updatedState.tasksAndLists[activeListIndex].tasks.splice(taskToBeDel, 1);
      return { ...updatedState };
    }
    case 'ACTIVATE_LIST': {
      const activeIndex = state.tasksAndLists.findIndex(
        (object) => object.list === action.list
      );
      updatedState.tasksAndLists.map((list) => (list.selected = false));
      updatedState.tasksAndLists[activeIndex].selected = true;
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
