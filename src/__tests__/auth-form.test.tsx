import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import { AuthForm } from '../routes/auth/form';

describe('Auth-form component rendering', () => {
  const props = {
    handleSubmit: () => {},
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthForm {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('submit', () => {
    let invocationIndicator = false;
    const testCallback = () => {
      invocationIndicator = true;
    };

    const wrapper = shallow(<AuthForm handleSubmit={testCallback} />) as any;

    wrapper.find('button.auth-form__submit').simulate('click');
    expect(invocationIndicator).toEqual(true);
  });
});
