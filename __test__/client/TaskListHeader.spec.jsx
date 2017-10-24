import React from 'react'
import { shallow, mount } from 'enzyme';
import ConnectedTaskListHeader, { TaskListHeader } from '../../client/components/TaskListHeader.jsx'
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store'
const middlewares = []
const mockStore = configureStore(middlewares)

xdescribe('<TaskListHeader />', () => {
  let wrapper;
  let fn;
  const initialState = {}
  const store = mockStore(initialState)
  beforeEach(() => {
    fn = jest.fn();
    wrapper = mount(<Provider store={store}><TaskListHeader /></Provider>);

  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});