import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../main/main';
import Login from '../login/login';
import Property from '../property/property';
import Favorites from '../favorites/favorites';
import Page404 from '../page404/page404';
import {offerType} from '../../types/offers';

function App({locations, offers}) {

  let pageClassName = '';
  switch (window.location.pathname) {
    case '/':
      pageClassName = 'page page--gray page--main';
      break;
    case '/login':
      pageClassName = 'page page--gray page--login';
      break;
    case '/favorites':
      pageClassName = 'page page--favorites';
      break;
    default:
      pageClassName = 'page';
  }

  return (
    <div className={pageClassName}>
      <BrowserRouter>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link
                  className={window.location.pathname === '/' ? 'header__logo-link header__logo-link--active' : 'header__logo-link'}
                  to={window.location.pathname === '/' ? '' : '/'}
                >
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <Main locations={locations} offers={offers} />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <Login />
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <Favorites offers={offers}/>
          </Route>
          <Route exact path={AppRoute.PROPERTY}>
            <Property offers={offers}/>
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

App.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  offers: PropTypes.arrayOf(
    offerType,
  ).isRequired,
};

export default App;
