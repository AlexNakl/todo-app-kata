import { v4 as uuidv4 } from 'uuid';

const createTask = (label) => ({
  label,
  isDone: false,
  isEditable: false,
  id: uuidv4(),
  createdTime: Date.now(),
});

export default createTask;
