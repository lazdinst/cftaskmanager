import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

/** ============================================================
 * Define Actions
 * ========================================================== */
export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const SAVE_ALL_TASKS = 'SAVE_ALL_TASKS';
export const TOGGLE_FORM_VISIBILITY = 'TOGGLE_FORM_VISIBILITY';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const DELETE_TASK = 'DELETE_TASK';

/** ============================================================
 * Define Initial State
 * ========================================================== */
const initialState = {
  title: 'Tasks',
  tasks: [],
  nextTaskId: 0,
  toggleForm: false
};

/** ============================================================
 * Define Reducer
 * ========================================================== */
export default (state = initialState, action) => {
  switch (action.type) {
  case GET_ALL_TASKS:
    return {
      ...state,
      tasks: action.tasks,
      nextTaskId: action.nextTaskId
    };
  case DELETE_TASK:
    return {
      ...state,
      tasks : state.tasks.filter((task) => { return task.id !== action.id})
    };
  case SAVE_ALL_TASKS : 
    return {
      ...state,
      postSuccess: !state.postSuccess
    };
  case ADD_NEW_TASK:
    return {
      ...state,
      tasks: [...state.tasks, action.task],
      toggleForm: !state.toggleForm
    };
  case TOGGLE_FORM_VISIBILITY:
    return {
      ...state,
      toggleForm: !state.toggleForm
    };
  default:
    return state;
  }
};

/** ============================================================
 * Define Action Creators
 * ========================================================== */
export const getAllTasks = () => {
  return dispatch => {
    return axios.get('http://cfassignment.herokuapp.com/talislazdins/tasks')
      .then(results => {
        let tasks = results.data.tasks || [];
        let id = tasks.length ? tasks[tasks.length - 1].id + 1 : 0;
        dispatch({
          type: GET_ALL_TASKS,
          tasks: tasks,
          nextTaskId: id
        });
      });
  };
};

export const saveAllTasks = (tasks) => {
  return dispatch => {
    return axios.post('http://cfassignment.herokuapp.com/talislazdins/tasks', {tasks: tasks || null})
      .then(results => {
        console.log('Post success');
        dispatch({
          type: SAVE_ALL_TASKS
        });
      });
      
  };
};

export const showNewTaskForm = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_FORM_VISIBILITY
    });
  };
};

export const handleSubmit = (values) => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_NEW_TASK,
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
      type: DELETE_TASK,
      id: id
    });
  };
};