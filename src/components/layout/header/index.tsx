import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// STYLES
import './styles.scss';

// MODELS
import { STORE } from '../../../store/store.model';
// import { UserI } from '../../../store/users/model';

// CONSTANTS
import { GAME_PAGE_PATH, AUTH_PAGE_PATH } from '../../../routes';

// HELPERS
function checkIsActive(path: string) {
  return window.location.pathname === path ? 'active-route' : '';
}

// PROPS MODEL
export interface HeaderProps {
  currentUserName: string | null;
  opponentName: string | null;
}

const RootHeader: React.FC<HeaderProps> = ({ currentUserName, opponentName }) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to={GAME_PAGE_PATH} className={`header__link ${checkIsActive(GAME_PAGE_PATH)}`}>
          Play
        </Link>
        <Link to={AUTH_PAGE_PATH} className={`header__link ${checkIsActive(AUTH_PAGE_PATH)}`}>
          Change Name
        </Link>
      </nav>
      {currentUserName && opponentName && (
        <section className="header__right-section">
          <span className="header__user-name">{`${currentUserName} VS ${opponentName}`}</span>
        </section>
      )}
    </header>
  );
};

const mapStateToProps = (state: STORE) => ({
  currentUserName: state.users.currentUser.name,
  opponentName: state.users.opponent.name,
});
const mapDispatchToProps = {};

export const Header = connect(mapStateToProps, mapDispatchToProps)(RootHeader);
