import { useRef, useContext } from 'react';
import { TaskContext } from '../../store/taskContext';
import _ from 'lodash';
import Search from '../UI/Search/Search';
import Select from '../UI/Select/Select';
import Button from '../UI/Button/Button';
import styles from './AddTaskForm.module.css';

const AddTaskForm = ({ onFormReset }) => {
  const { addTask } = useContext(TaskContext);
  const taskRef = useRef();
  const priorityRef = useRef();

  const addTaskHandler = (e) => {
    const task = taskRef.current.value.toLowerCase();
    const priority = priorityRef.current.value;
    e.preventDefault();
    if (task.trim().length > 0 && priority.trim().length > 0) {
      // default task structure
      addTask({
        task: task,
        priority: priority,
        completed: false,
        id: _.uniqueId(),
      });
      onFormReset([taskRef]);
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
        <Select ref={priorityRef} />
      </div>
      <Button type="submit" className={styles.cta}>
        Add
      </Button>
    </form>
  );
};

export default AddTaskForm;
