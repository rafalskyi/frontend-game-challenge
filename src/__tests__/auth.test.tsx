import React from 'react';
import ReactDOM from 'react-dom';

import { AuthPage } from '../routes/auth';

describe('Auth component rendering', () => {
  const props = {
    setUserName: () => {},
    history: {
      push: jest.fn(),
    },
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthPage {...(props as any)} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
