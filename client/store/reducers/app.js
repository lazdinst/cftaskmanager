import * as constants from '../constants/app';

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
  case constants.GET_ALL_TASKS:
    return {
      ...state,
      tasks: action.tasks,
      nextTaskId: action.nextTaskId
    };
  case constants.DELETE_TASK:
    return {
      ...state,
      tasks : state.tasks.filter((task) => { return task.id !== action.id})
    };
  case constants.SAVE_ALL_TASKS : 
    return {
      ...state,
      postSuccess: action.postSuccess,
      postFailure: !action.postSuccess
    };
  case constants.ADD_NEW_TASK:
    return {
      ...state,
      tasks: [...state.tasks, action.task],
      toggleForm: !state.toggleForm
    };
  case constants.TOGGLE_TASK_TITLE_INPUT: 
    return {
      ...state,
      toggleTitleInput: !state.toggleTitleInput
    };
    case constants.SET_TASK_TITLE : 
    return {
      ...state,
      title: action.title
    };
  case constants.TOGGLE_FORM_VISIBILITY:
    return {
      ...state,
      toggleForm: !state.toggleForm
    };
  case constants.SET_POST_SUCCESS:
    return {
      ...state,
      postSuccess: !state.postSuccess
    };
  default:
    return state;
  }
};