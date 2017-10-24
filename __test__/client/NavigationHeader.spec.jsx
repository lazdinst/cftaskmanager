import React from 'react'
import { shallow, mount } from 'enzyme';
import NavigationHeader from '../../client/components/NavigationHeader.jsx'
import toJson from 'enzyme-to-json';

describe('<NavigationHeader />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationHeader />);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
