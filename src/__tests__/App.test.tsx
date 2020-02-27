// import { shallow } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from '../store';
import { AppRoot } from '../routes/app';

describe('Root App component rendering', () => {
  const props = {
    currentUser: {
      name: '',
    },
  };
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Provider store={store}>
          <AppRoot {...props} />
        </Provider>
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
