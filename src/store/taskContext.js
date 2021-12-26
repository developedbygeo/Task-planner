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
  const { tasksAndLists } = updatedState;
  const activeIndex = tasksAndLists.findIndex((list) => list.selected === true);

  switch (action.type) {
    case 'ADD_TASK': {
      const updatedTasks = tasksAndLists
        .filter((list) => list.selected === true)[0]
        .tasks.concat(action.task);
      tasksAndLists[activeIndex].tasks = updatedTasks;
      return { ...updatedState };
    }
    case 'ADD_LIST': {
      const newObject = { list: action.list, selected: true, tasks: [] };
      tasksAndLists.map((list) => (list.selected = false));
      tasksAndLists.push(newObject);
      return { ...updatedState };
    }
    case 'COMPLETE_TOGGLE': {
      const taskToBeMarked = tasksAndLists[activeIndex].tasks.find(
        (task) => task.id === action.id
      );
      taskToBeMarked.completed = !taskToBeMarked.completed;
      return { ...updatedState };
    }
    // TODO refactor delete_task to delete all completed tasks
    // don't need ID for that - ID is used in MARK_COMPLETE
    case 'DELETE_TASK': {
      const taskToBeDel = tasksAndLists[activeIndex].tasks.findIndex(
        (obj) => obj.id === action.id
      );
      tasksAndLists[activeIndex].tasks.splice(taskToBeDel, 1);
      return { ...updatedState };
    }
    case 'ACTIVATE_LIST': {
      const activeIndex = tasksAndLists.findIndex(
        (object) => object.list === action.active.list
      );
      tasksAndLists.map((list) => (list.selected = false));
      tasksAndLists[activeIndex].selected = true;
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
  const completeToggleHandler = (id) => {
    dispatchActivity({ type: 'COMPLETE_TOGGLE', id: id });
  };
  const deleteTaskHandler = (id) => {
    dispatchActivity({ type: 'DELETE_TASK', id: id });
  };

  const defaultValues = {
    currentState: activityState,
    addTask: addTaskHandler,
    addList: addListHandler,
    toggleComplete: completeToggleHandler,
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
