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

    case 'DELETE_TASK': {
      const defaultList = tasksAndLists.find((obj) => obj.list === 'default');
      const isCurrentListDefault =
        tasksAndLists[activeIndex].list === 'default';
      const taskToBeDel = tasksAndLists[activeIndex].tasks.findIndex(
        (obj) => obj.id === action.id
      );
      // finds the task (based on index) and removes it
      tasksAndLists[activeIndex].tasks.splice(taskToBeDel, 1);
      // if the task length is 0 & it is NOT the default list, it filters the list out
      if (
        tasksAndLists[activeIndex].tasks.length === 0 &&
        !isCurrentListDefault
      ) {
        defaultList.selected = true;
        const updatedLists = tasksAndLists
          .filter((list) => list.tasks.length !== 0)
          .concat(defaultList);
        return { ...updatedState, tasksAndLists: updatedLists };
      }

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
  const deleteTaskHandler = (id) => {
    dispatchActivity({ type: 'DELETE_TASK', id: id });
  };

  const searchTaskHandler = (query) => {
    dispatchActivity({ type: 'SEARCH_TASK', query: query });
  };

  const completeToggleHandler = (id) => {
    dispatchActivity({ type: 'COMPLETE_TOGGLE', id: id });
  };

  const addListHandler = (list) => {
    dispatchActivity({ type: 'ADD_LIST', list: list });
  };
  const activateListHandler = (activatedList) => {
    dispatchActivity({ type: 'ACTIVATE_LIST', active: activatedList });
  };

  const defaultValues = {
    currentState: activityState,
    addTask: addTaskHandler,
    deleteTask: deleteTaskHandler,
    searchTask: searchTaskHandler,
    toggleComplete: completeToggleHandler,
    addList: addListHandler,
    activateList: activateListHandler,
  };

  return (
    <TaskContext.Provider value={defaultValues}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskAndListProvider;
