import React, { Component } from 'react';
import { connect } from 'react-redux';

// ACTIONS
import { getEntities, userChoice, setANewGame } from '../../store/game/actions';

// MODELS
import { STORE } from '../../store/store.model';
import { getEntitiesType, userChoiceType, setANewGameType, EntityItem, USER_CHOICE } from '../../store/game/model';

// COMPONENTS
import { EntityList } from './entity-list';
import { CustomModal } from '../../components/modal';
import { Spinner } from '../../components/spinner';

import { MAX_ROUND_COUNT } from '../../constants';

import './style.scss';

interface OwnProps {}

interface StoreProps {
  entities: EntityItem[];
  userOne: USER_CHOICE;
  userTwo: USER_CHOICE;
  roundResult: string;
  numberOfRound: number;
  isFetching: boolean;
}

interface DispatchProps {
  getEntities: getEntitiesType;
  userChoice: userChoiceType;
  setANewGame: setANewGameType;
}

type ALL_PROPS = StoreProps & DispatchProps & OwnProps;

type ALLSTATE = {
  openModal: boolean;
};

export class GameComponent extends Component<ALL_PROPS, ALLSTATE> {
  state = {
    openModal: false,
  };

  componentDidMount() {
    const { getEntities } = this.props;

    getEntities();
  }

  componentDidUpdate(prevProps: ALL_PROPS) {
    const { numberOfRound } = this.props;

    if (prevProps.numberOfRound !== MAX_ROUND_COUNT && numberOfRound === MAX_ROUND_COUNT) {
      this.openModalEvent();
    }
  }

  componentWillUnmount() {
    const { setANewGame } = this.props;

    setANewGame();
  }

  openModalEvent = () => this.setState({ openModal: true });
  closeModalEvent = () => {
    const { setANewGame } = this.props;
    this.setState({ openModal: false });
    setANewGame();
  };

  resultString = () => {
    const { userOne, userTwo } = this.props;

    if (userOne.score === userTwo.score) return 'Result of Your match is DRAW';

    if (userOne.score > userTwo.score) return 'Congratulations you are winner';

    return 'Sorry but you lost';
  };

  render() {
    const { openModal } = this.state;
    const { entities, userOne, userTwo, roundResult, numberOfRound, userChoice, isFetching } = this.props;
    return (
      <div className="game">
        <h1 className="game__title">{numberOfRound === 0 ? `Choose your fighter` : `Round #${numberOfRound}`}</h1>
        <h1>
          {userOne.score} : {userTwo.score}
        </h1>

        <div className="game__board">
          {isFetching && <Spinner />}
          <EntityList userBoard entities={entities} userChoice={userChoice} selected={userOne.id} />
          <div className="game__vs-title-box">
            <h1>VS</h1>
          </div>
          <EntityList entities={entities} selected={userTwo.id} />
        </div>
        {roundResult && <h1 className="game__round-result">{roundResult}</h1>}

        {openModal && (
          <CustomModal closeEvent={this.closeModalEvent}>
            <div>
              <h3>
                Game ends with {userOne.score} : {userTwo.score} score
              </h3>

              <p className="game__game-result-title">{this.resultString()}</p>
              <button className="game__new-game-button" onClick={this.closeModalEvent}>
                Start a new game
              </button>
            </div>
          </CustomModal>
        )}
      </div>
    );
  }
}

const mapStateToProps = (store: STORE): StoreProps => ({
  entities: store.entity.entities,
  isFetching: store.entity.isFetching,
  userOne: store.entity.userOneChoice,
  userTwo: store.entity.userTwoChoice,
  roundResult: store.entity.roundResult,
  numberOfRound: store.entity.numberOfRound,
});

export default connect<StoreProps, DispatchProps, OwnProps, STORE>(mapStateToProps, {
  getEntities,
  userChoice,
  setANewGame,
})(GameComponent);
