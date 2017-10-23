import React from 'react'
import { shallow, mount } from 'enzyme';
import App from '../../client/components/App.jsx'
import toJson from 'enzyme-to-json';

describe('<App />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
