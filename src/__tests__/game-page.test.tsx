import { shallow, mount } from 'enzyme';
import * as React from 'react';
import ReactDOM from 'react-dom';

import { GameComponent } from '../routes/game';
import { Spiner } from '../components/spiner';
import { CustomModal } from '../components/modal';

// import store from '../store';
import { ENTITIES } from '../mock/data';

describe('Game component rendering', () => {
  const props = {
    isFetching: false,
    entities: ENTITIES,
    userOne: { id: '', score: 0 },
    userTwo: { id: '', score: 0 },
    roundResult: '',
    numberOfRound: 0,
    getEntities: () => {},
    userChoise: () => {},
    setANewGame: () => {},
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GameComponent {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render spiner', () => {
    const caseProps = { ...props, isFetching: true };
    const wrapper = shallow(<GameComponent {...caseProps} />);
    expect(wrapper.find(Spiner).exists()).toBe(true);
  });

  it('render modal', () => {
    const wrapper = shallow(<GameComponent {...props} />);
    wrapper.setState({ openModal: true });

    expect(wrapper.find(CustomModal).exists()).toBe(true);
  });

  it('render round result', () => {
    const caseProps = { ...props, roundResult: 'Some result' };
    const wrapper = shallow(<GameComponent {...caseProps} />);

    expect(wrapper.find('h1.game__round-result').exists()).toBe(true);
  });

  it('render start game title', () => {
    const caseProps = { ...props, numberOfRound: 0 };
    const wrapper = shallow(<GameComponent {...caseProps} />);
    const title = wrapper.find('h1.game__title');

    expect(title.text()).toBe('Choose your fighter');
  });

  it('render game title', () => {
    const round = 5;
    const caseProps = { ...props, numberOfRound: round };
    const wrapper = shallow(<GameComponent {...caseProps} />);
    const title = wrapper.find('h1.game__title');

    expect(title.text()).toBe(`Round #${round}`);
  });

  it('render result (lost) string in modal', () => {
    const caseProps = { ...props, userOne: { id: '', score: 10 }, userTwo: { id: '', score: 12 } };
    const wrapper = shallow(<GameComponent {...caseProps} />);
    wrapper.setState({ openModal: true });
    const title = wrapper.find('p.game__game-result-title');

    expect(title.text()).toBe(`Sorry but you lost`);
  });

  it('render result (win) string in modal', () => {
    const caseProps = { ...props, userOne: { id: '', score: 10 } };
    const wrapper = shallow(<GameComponent {...caseProps} />);
    wrapper.setState({ openModal: true });
    const title = wrapper.find('p.game__game-result-title');

    expect(title.text()).toBe(`Congratulations you are winner`);
  });

  it('componentWillUnmount / componentDidMount', () => {
    const spyDidMount = jest.spyOn(GameComponent.prototype, 'componentDidMount');
    const spyWillUnmount = jest
      .spyOn(GameComponent.prototype, 'componentWillUnmount')
      .mockImplementation(props.setANewGame);

    const wrapper = mount(<GameComponent {...props} />);
    expect(spyDidMount).toHaveBeenCalledTimes(1);
    wrapper.unmount();
    expect(spyWillUnmount).toHaveBeenCalledTimes(1);
  });

  it('componentDidUpdate', () => {
    const caseProps = { ...props, numberOfRound: 19 };
    const wrapper = shallow(<GameComponent {...caseProps} />);
    wrapper.setProps({ numberOfRound: 20 });

    const title = wrapper.find('h1.game__title');
    expect(title.text()).toBe('Round #20');
  });

  it('closeModalEvent', () => {
    const caseProps = { ...props, numberOfRound: 20 };
    const wrapper = shallow(<GameComponent {...caseProps} />) as any;
    const instance = wrapper.instance();
    const event = jest.spyOn(instance, 'closeModalEvent');
    wrapper.setState({ openModal: true });

    wrapper.find('button.game__new-game-button').simulate('click');

    expect(event).toBeCalled();
  });
});
