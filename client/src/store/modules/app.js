import axios from 'axios';

/** ============================================================
 * Define Actions
 * ========================================================== */
export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const SAVE_ALL_TASKS = 'SAVE_ALL_TASKS';
export const TOGGLE_FORM_VISIBILITY = 'TOGGLE_FORM_VISIBILITY';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_TASK_TITLE = 'SET_TASK_TITLE';
export const TOGGLE_TASK_TITLE_INPUT = 'TOGGLE_TASK_TITLE_INPUT';

/** ============================================================
 * Define Initial State
 * ========================================================== */
const initialState = {
  app: {
    taskTitle: 'Tasks',
    tasks: [],
    nextTaskId: 0,
    toggleForm: false,
    toggleTitleInput: false
  }
};
export const exportedState = Object.assign({}, initialState);
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
      postSuccess: action.postSuccess,
      postFailure: !action.postSuccess
    };
  case ADD_NEW_TASK:
    return {
      ...state,
      tasks: [...state.tasks, action.task],
      toggleForm: !state.toggleForm
    };
  case TOGGLE_TASK_TITLE_INPUT: 
    return {
      ...state,
      toggleTitleInput: !state.toggleTitleInput
    };
    case SET_TASK_TITLE : 
    return {
      ...state,
      title: action.title
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
          type: SAVE_ALL_TASKS,
          postSuccess: true
        });
      })
      .catch(()=>{
        dispatch({
          type: SAVE_ALL_TASKS,
          postSuccess: false,
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

export const handleTaskTitle = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_TASK_TITLE_INPUT
    });
  };
};

export const handleTitleChange = (title) => {
  return dispatch => {
    dispatch({
      type: SET_TASK_TITLE,
      title: title.title
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