import React from 'react'
import { shallow, mount } from 'enzyme';
import TaskListEntry from '../../client/components/TaskListEntry.jsx'
import toJson from 'enzyme-to-json';

xdescribe('<TaskListEntry />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskListEntry />);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
