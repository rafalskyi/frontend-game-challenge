import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import { EntityList } from '../routes/game/entity-list';

import { ENTITIES } from '../mock/data';

describe('Entity component rendering', () => {
  const props = {
    entities: ENTITIES,
    userChoise: () => {},
    userBoard: false,
    selected: '',
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EntityList {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('item length', () => {
    const wrapper = shallow(<EntityList {...props} />);

    expect(wrapper.find('li').length).toBe(props.entities.length);
  });
});
