import React from 'react'
import { shallow, mount } from 'enzyme';
import TaskList from '../../client/components/TaskList.jsx'
import toJson from 'enzyme-to-json';

xdescribe('<TaskList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskList />);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
