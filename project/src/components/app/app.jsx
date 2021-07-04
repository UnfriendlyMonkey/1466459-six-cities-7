import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../main/main';
import Login from '../login/login';
import Property from '../property/property';
import Favorites from '../favorites/favorites';
import Page404 from '../page404/page404';
import {offerType} from '../../types/offers';

function App({placesFound, locations, offers}) {

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
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
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
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <Main placesFound={placesFound} locations={locations} offers={offers} />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <Login />
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <Favorites />
          </Route>
          <Route exact path={AppRoute.PROPERTY}>
            <Property />
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
  placesFound: PropTypes.number,
  offers: offerType.isRequired,
};

export default App;
