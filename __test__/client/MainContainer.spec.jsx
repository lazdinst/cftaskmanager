import React from 'react'
import { shallow, mount } from 'enzyme';
import MainContainer from '../../client/components/MainContainer.jsx'
import toJson from 'enzyme-to-json';

describe('<MainContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainContainer />);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});