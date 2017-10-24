import React from 'react'
import { shallow, mount } from 'enzyme';
import TaskForm from '../../client/components/TaskForm.jsx'
import toJson from 'enzyme-to-json';

describe('<TaskForm />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskForm />);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
