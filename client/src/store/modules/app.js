import axios from 'axios';

/** ============================================================
 * Define Actions
 * ========================================================== */
export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const POST_ALL_TASKS = 'POST_ALL_TASKS';
export const TOGGLE_FORM_VISIBILITY = 'TOGGLE_FORM_VISIBILITY';

/** ============================================================
 * Define Initial State
 * ========================================================== */
const initialState = {
  title: 'Tasks',
  tasks: [],
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
      tasks: action.tasks.tasks
    };
  case POST_ALL_TASKS : 
    return {
      ...state,
    };
  case TOGGLE_FORM_VISIBILITY:
    console.log(state.toggleForm)
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
        dispatch({
          type: GET_ALL_TASKS,
          tasks: results.data
        });
      });
  };
};

export const saveAllTasks = (taskList) => {
  return dispatch => {
    return axios.post('http://cfassignment.herokuapp.com/talislazdins/tasks', taskList)
      .then(results => {
        dispatch({
          type: POST_ALL_TASKS
        });
      });
  };
};

export const showNewTaskForm = () => {
  return dispatch => {
    console.log('Dispatched')
    dispatch({
      type: TOGGLE_FORM_VISIBILITY
    });
  };
};