import Modal from '../UI/Modal/Modal';
import Form from '../UI/Form/Form';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './AddTaskForm.module.css';

// TODO change bg based on context;

const AddTaskForm = ({ onMenuDisable }) => {
  return (
    <Modal onMenuDisable={onMenuDisable}>
      <Button
        onClick={onMenuDisable}
        title="Close menu"
        className={styles.ctaSec}
      >
        <FontAwesomeIcon icon={faTimes} />
      </Button>
      <Form
        className={styles.addTaskForm}
        buttonClassName={styles.cta}
        isFieldActive={true}
        formData={[
          {
            placeholder: 'What task are we adding?',
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
