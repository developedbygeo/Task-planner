import { useRef, useContext } from 'react';
import { TaskContext } from '../../store/taskContext';
import _ from 'lodash';
import Search from '../UI/Search/Search';
import Button from '../UI/Button/Button';
import styles from './AddTaskForm.module.css';

const AddTaskForm = ({ onFormReset }) => {
  const taskCtx = useContext(TaskContext);
  const taskRef = useRef();
  const priorityRef = useRef();

  const addTaskHandler = (e) => {
    const task = taskRef.current.value;
    const priority = priorityRef.current.value;
    e.preventDefault();
    if (task.trim().length > 0 && priority.trim().length > 0) {
      taskCtx.addTask({ task: task, priority: priority, id: _.uniqueId() });
      onFormReset([taskRef, priorityRef]);
    } else {
      return;
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.addTaskForm}>
      <div className={styles.formFields}>
        <label htmlFor="taskName">Task Name</label>
        <Search
          required
          ref={taskRef}
          id={'taskName'}
          placeholder={'What task are we adding?'}
        />
      </div>
      <div className={styles.formFields}>
        <label htmlFor="taskPriority">Task Priority</label>
        <Search
          required
          ref={priorityRef}
          id={'taskPriority'}
          placeholder={`What is the task's priority?`}
        />
      </div>
      <Button type="submit" className={styles.cta}>
        Add
      </Button>
    </form>
  );
};

export default AddTaskForm;
