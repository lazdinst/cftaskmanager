import * as constants from '../constants/app';
import axios from 'axios';

export const getAllTasks = () => {
  return dispatch => {
    return axios.get('http://cfassignment.herokuapp.com/talislazdins/tasks')
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
};

export const saveAllTasks = (tasks, title) => {
  let data = {
    tasks: {
      tasks: tasks,
      title: title
    }
  }
  return dispatch => {
    return axios.post('http://cfassignment.herokuapp.com/talislazdins/tasks', data)
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

export const showNewTaskForm = () => {
  return dispatch => {
    dispatch({
      type: constants.TOGGLE_FORM_VISIBILITY
    });
  };
};

export const handleTaskTitle = () => {
  return dispatch => {
    dispatch({
      type: constants.TOGGLE_TASK_TITLE_INPUT
    });
  };
};

export const handleTitleChange = (title) => {
  return dispatch => {
    dispatch({
      type: constants.SET_TASK_TITLE,
      title: title.title
    });
  };
};

export const handleSubmit = (values) => {
  return (dispatch, getState) => {
    dispatch({
      type: constants.ADD_NEW_TASK,
      task: {
        id: getState().app.nextTaskId++,
        name: values.name,
        createdAt: new Date().toISOString()
      }
    });
  };
};

export const deleteTask = (id) => {
  console.log('Task ID', id);
  return dispatch => {
    dispatch({
      type: constants.DELETE_TASK,
      id: id
    });
  };
};