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

      return { ...updatedState, selection: '' };
    }

    case 'SEARCH_TASK': {
      // locates the object and if it exists, extracts id and locates the parent.
      const taskObject = tasksAndLists
        .map((obj) =>
          obj.tasks.filter((list) => list.task.includes(action.query))
        )
        .flat()[0];
      if (taskObject) {
        const taskId = taskObject.id;
        const taskParent = tasksAndLists.find((obj) =>
          obj.tasks.some((task) => task.id === taskId)
        );
        // then parent is set as selected and returns a selection id through context
        tasksAndLists.map((list) => (list.selected = false));
        taskParent.selected = true;
        return { ...updatedState, selection: taskId };
      }
      return { ...updatedState, selection: '' };
    }

    case 'ADD_LIST': {
      const newObject = { list: action.list, selected: true, tasks: [] };
      tasksAndLists.map((list) => (list.selected = false));
      tasksAndLists.push(newObject);
      return { ...updatedState, selection: '' };
    }

    case 'COMPLETE_TOGGLE': {
      const taskToBeMarked = tasksAndLists[activeIndex].tasks.find(
        (task) => task.id === action.id
      );
      taskToBeMarked.completed = !taskToBeMarked.completed;
      return { ...updatedState, selection: '' };
    }

    case 'ACTIVATE_LIST': {
      const activeIndex = tasksAndLists.findIndex(
        (object) => object.list === action.active.list
      );
      tasksAndLists.map((list) => (list.selected = false));
      tasksAndLists[activeIndex].selected = true;
      return { ...updatedState, selection: '' };
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
