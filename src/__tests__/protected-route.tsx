import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { RootProtectedRoute } from '../components/protected-route';
import store from '../store';

describe('Auth component rendering', () => {
  const props = {
    isProtected: true,
    component: lazy(() => import('../routes/game')),
    layoutConfig: {
      isWithoutFooter: true,
    },
    path: '/',
    currentUser: {
      name: 'Tony',
    },
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <Suspense fallback={null}>
            <RootProtectedRoute {...props} />
          </Suspense>
        </Provider>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Redirect component', () => {
    const currentProps = { ...props, currentUser: { name: '' } };

    const wrapper = shallow(<RootProtectedRoute {...currentProps} />);

    expect(wrapper.find(Redirect).exists()).toBe(true);
  });
});
