import configureStore from 'redux-mock-store'
const middlewares = []
const mockStore = configureStore(middlewares)
import { 
  showNewTaskForm, 
  handleTaskTitle, 
  handleTitleChange,
  toggleSuccess,
  deleteTask, 
  toggleFailure
  } from '../../client/store/actions/app';
import constants from '../../client/store/constants/app';

describe('Dispatch Actions', () => {
  it('should dispatch TOGGLE_FORM_VISIBILITY action', () => {
      const initialState = {}
      const store = mockStore(initialState)
      store.dispatch(showNewTaskForm())
      const actions = store.getActions()
      const expectedPayload = { type: 'TOGGLE_FORM_VISIBILITY' }
      expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch TOGGLE_TASK_TITLE_INPUT action', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(handleTaskTitle())
    const actions = store.getActions()
    const expectedPayload = { type: 'TOGGLE_TASK_TITLE_INPUT' }
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch SET_TASK_TITLE action', () => {
    const testTitle = {title: 'Arya Starks Hitlist'}
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(handleTitleChange(testTitle))
    const actions = store.getActions()
    const expectedPayload = { type: 'SET_TASK_TITLE', title: testTitle.title}
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch DELETE_TASK action', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(deleteTask(1))
    const actions = store.getActions()
    const expectedPayload = { type: 'DELETE_TASK', id: 1}
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch SET_POST_SUCCESS action', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(toggleSuccess())
    const actions = store.getActions()
    const expectedPayload = { type: 'SET_POST_SUCCESS' }
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch SET_POST_FAILURE action', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(toggleFailure())
    const actions = store.getActions()
    const expectedPayload = { type: 'SET_POST_FAILURE' }
    expect(actions).toEqual([expectedPayload])
  })
});

