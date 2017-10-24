import * as constants from '../constants/app';
import axios from 'axios';
import store from '../../store';

export const getAllTasks = () => {
  return axios.get('/api/tasks')
    .then(results => {
      let tasks = results.data.tasks || [];
      let id = tasks.length ? tasks[tasks.length - 1].id + 1 : 0;
      dispatch({
        type: constants.GET_ALL_TASKS,
        tasks: tasks,
        nextTaskId: id
      });
    });
};

export const saveAllTasks = (tasks, title) => {
  let data = {
    tasks: {
      tasks: tasks,
      title: title
    }
  }
  return dispatch => {
    return axios.post('/api/tasks', data)
      .then(results => {
        console.log('Post success');
        dispatch({
          type: constants.SAVE_ALL_TASKS,
          postSuccess: true
        });
      })
      .catch(()=>{
        dispatch({
          type: constants.SAVE_ALL_TASKS,
          postSuccess: false,
        });
      });
      
  };
};

export const showNewTaskForm = () => ({
  type: constants.TOGGLE_FORM_VISIBILITY
});

export const handleTaskTitle = () => ({
  type: constants.TOGGLE_TASK_TITLE_INPUT
});

export const handleTitleChange = (title) => ({
  type: constants.SET_TASK_TITLE,
  title: title.title
});

export const handleSubmit = (values) => ({
  type: constants.ADD_NEW_TASK,
  task: {
    id: store.getState().app.nextTaskId++,
    name: values.name,
    createdAt: new Date().toISOString()
  }
});

export const updateTaskName = (index, name) => ({
  type: constants.UPDATE_TASK_NAME,
  index: index,
  name: name
});

export const deleteTask = (id) => ({
  type: constants.DELETE_TASK,
  id: id
});

export const toggleSuccess = () => ({
  type: constants.SET_POST_SUCCESS,
});

export const toggleFailure = () => ({
  type: constants.SET_POST_FAILURE,
});