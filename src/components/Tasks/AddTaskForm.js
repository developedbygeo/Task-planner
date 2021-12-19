import Search from '../UI/Search/Search';
import Button from '../UI/Button/Button';
import styles from './AddTaskForm.module.css';

const AddTaskForm = ({ onAddTask }) => {
  return (
    <form onSubmit={onAddTask} className={styles.addTaskForm}>
      <div className={styles.formFields}>
        <label htmlFor="taskName">Task Name</label>
        <Search id={'taskName'} placeholder={'What task are we adding?'} />
      </div>
      <div className={styles.formFields}>
        <label htmlFor="taskPriority">Task Priority</label>
        <Search
          id={'taskPriority'}
          placeholder={`What is the task's priority?`}
        />
      </div>
      <Button className={styles.cta}>Add</Button>
    </form>
  );
};

export default AddTaskForm;
