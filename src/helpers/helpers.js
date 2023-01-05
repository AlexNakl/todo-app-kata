import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { v4 as uuidv4 } from 'uuid'

const createTask = (label) => ({
	label,
	isDone: false,
	id: uuidv4(),
	createdTime: formatDistanceToNow(Date.now()),
});

export {
	createTask
};