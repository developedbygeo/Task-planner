import Modal from '../UI/Modal/Modal';
import Form from '../UI/Form/Form';
import styles from './AddTaskForm.module.css';

// TODO change bg based on context;

const AddTaskForm = (props) => {
  return (
    <Modal>
      <Form
        className={styles.addTaskForm}
        buttonClassName={styles.cta}
        isFieldActive={true}
        formData={[
          {
            placeholder: 'What are we adding',
            labelStatus: true,
            label: 'Task Name',
          },
          {
            placeholder: `What is the task's priority?`,
            labelStatus: true,
            label: 'Priority',
          },
        ]}
        type="submit"
      >
        {'Add'}
      </Form>
    </Modal>
  );
};

export default AddTaskForm;
