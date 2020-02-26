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

  // it('submit', () => {
  //   const wrapper = shallow(<AuthForm {...props} />) as any;
  //   const instance = wrapper.instance();
  //   const event = jest.spyOn(instance, 'saveEvent');

  //   wrapper.find('button.auth-form__submit').simulate('click');
  //   expect(event).toBeCalled();
  // });
});
