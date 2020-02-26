import React, { Component } from 'react';
import { connect } from 'react-redux';

// ACTIONS
import { getEntities, userChoise, setANewGame } from '../../store/game/actions';

// MODELS
import { STORE } from '../../store/store.model';
import { getEntitiesType, userChoiseType, setANewGameType, EntityItem, ISER_CHOISE } from '../../store/game/model';

// COMPONENTS
import { EntityList } from './entity-list';
import { CustomModal } from '../../components/modal';
import { Spiner } from '../../components/spiner';

import { MAX_ROUND_COUNT } from '../../constants';

import './style.css';

interface OwnProps {}

interface StoreProps {
  entities: EntityItem[];
  userOne: ISER_CHOISE;
  userTwo: ISER_CHOISE;
  roundResult: string;
  numberOfRound: number;
  isFetching: boolean;
}

interface DispatchProps {
  getEntities: getEntitiesType;
  userChoise: userChoiseType;
  setANewGame: setANewGameType;
}

type ALLPROPS = StoreProps & DispatchProps & OwnProps;

type ALLSTATE = {
  openModal: boolean;
};

class GameComponent extends Component<ALLPROPS, ALLSTATE> {
  state = {
    openModal: false,
  };

  componentDidMount() {
    const { getEntities } = this.props;

    getEntities();
  }

  componentDidUpdate(prevProps: ALLPROPS) {
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

    if (userOne.score === userTwo.score) return 'Result of Your match is DROW';

    if (userOne.score > userTwo.score) return 'Congratulations you are winner';

    return 'Sorry but you lost';
  };

  render() {
    const { openModal } = this.state;
    const { entities, userOne, userTwo, roundResult, numberOfRound, userChoise, isFetching } = this.props;
    return (
      <div className="game">
        <h1>{numberOfRound === 0 ? `Choose your fighter` : `Round #${numberOfRound}`}</h1>
        <h1>
          {userOne.score} : {userTwo.score}
        </h1>

        <div className="game-board">
          {isFetching && <Spiner />}
          <EntityList userBoard entities={entities} userChoise={userChoise} selected={userOne.id} />
          <div className="vs-title-box">
            <h1>VS</h1>
          </div>
          <EntityList entities={entities} selected={userTwo.id} />
        </div>
        {roundResult && <h1>{roundResult}</h1>}

        {openModal && (
          <CustomModal closeEvent={this.closeModalEvent}>
            <div>
              <h3>
                Game ends with {userOne.score} : {userTwo.score} score
              </h3>

              <p>{this.resultString()}</p>
              <button onClick={this.closeModalEvent}>Start a new game</button>
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
  userOne: store.entity.userOneChoise,
  userTwo: store.entity.userTwoChoise,
  roundResult: store.entity.roundResult,
  numberOfRound: store.entity.numberOfRound,
});

export default connect<StoreProps, DispatchProps, OwnProps, STORE>(mapStateToProps, {
  getEntities,
  userChoise,
  setANewGame,
})(GameComponent);
