import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// STYLES
import './styles.scss';

// MODELS
import { STORE } from '../../../store/store.model';
import { UserI } from '../../../store/users/model';

// CONSTANTS
import { GAME_PAGE_PATH, AUTH_PAGE_PATH } from '../../../routes';

// HELPERS
function checkIsActive(path: string) {
  return window.location.pathname === path ? 'active-route' : '';
}

// PROPS MODEL
export interface HeaderProps {
  currentUser: UserI;
}

const RootHeader: React.FC<HeaderProps> = ({ currentUser }) => {
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
      <section className="header__right-section">
        <p className="header__user-name">{currentUser.name}</p>
      </section>
    </header>
  );
};

const mapStateToProps = (state: STORE) => ({
  currentUser: state.users.currentUser,
});
const mapDispatchToProps = {};

export const Header = connect(mapStateToProps, mapDispatchToProps)(RootHeader);
