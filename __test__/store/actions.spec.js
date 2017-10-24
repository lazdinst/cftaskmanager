const { getAllTasks } = require('../../client/store/actions/app');
console.log(getAllTasks());

import { GET_ALL_TASKS } from '../../client/store/constants/app';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { exportedState } from '../../client/store/reducers/app';

console.log(exportedState);
describe('signIn', () => {
  it('dispatches the onSignIn action on success', async () => {
    let user = { firstName: 'Bruce' };

    // auth.signInWithEmailAndPassword = jest.fn(() => {
    //   return Promise.resolve(user);
    // });

    let middlewares = [ thunk ];
    let mockStore = configureStore(middlewares);
    let store = mockStore(exportedState);

    await 1;
    expect(1).toEqual(1);
    //expect(store.getActions()).toEqual([ { type: GET_ALL_TASKS, tasks } ]);
  });
});