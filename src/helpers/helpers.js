import { v4 as uuidv4 } from 'uuid';

const createTask = (label, minutes = '59', seconds = '59') => {
  let min = minutes;
  let sec = seconds;

  if (!minutes) {
    min = '00';
  }
  if (!seconds) {
    sec = '00';
  }
  if (minutes < 10 && min !== '00') {
    min = `0${minutes}`;
  }
  if (seconds < 10 && sec !== '00') {
    sec = `0${seconds}`;
  }

  return {
    label,
    isDone: false,
    isEditable: false,
    id: uuidv4(),
    createdTime: Date.now(),
    minutes: min,
    seconds: sec,
    timerIsStarted: false,
    timerID: null,
  };
};

export default createTask;
