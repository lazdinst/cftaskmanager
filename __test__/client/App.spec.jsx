import React from 'react'
import { shallow, mount } from 'enzyme';
import App from '../../client/components/App.jsx'
import toJson from 'enzyme-to-json';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
