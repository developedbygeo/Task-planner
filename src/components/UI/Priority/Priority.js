import _ from 'lodash';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Priority.module.css';

const priorityLevelMap = {
  1: 'Low',
  2: 'Medium',
  3: 'High',
};

const Priority = ({ className, priorityLevel }) => {
  const evaluatedLevel = [...Array(+priorityLevel).keys()];
  const parsedLevel = priorityLevelMap[+priorityLevel];

  const parsedIcons = evaluatedLevel.map((level) => {
    return (
      <FontAwesomeIcon className={className} key={_.uniqueId()} icon={faStar} />
    );
  });

  return (
    <Card title={`Priority: ${parsedLevel}`} className={styles.priorityWrapper}>
      {parsedIcons}
    </Card>
  );
};

export default Priority;
