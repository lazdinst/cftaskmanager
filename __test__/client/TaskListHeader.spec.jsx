import React from 'react'
import { shallow, mount } from 'enzyme';
import TaskListHeader from '../../client/components/TaskListHeader.jsx'
import toJson from 'enzyme-to-json';

xdescribe('<TaskListHeader />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskListHeader />);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
