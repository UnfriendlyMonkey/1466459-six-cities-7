import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

function Main({placesFound, locations}) {
  const placesShown = [
    {name: 'place1', isPremium: true},
    {name: 'place2', isPremium: false},
    {name: 'place3', isPremium: false},
    {name: 'place4', isPremium: true},
    {name: 'place5', isPremium: false},
  ];

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              locations.map((item, i) => (
                <li key={item} className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>{item}</span>
                  </a>
                </li>))
            }
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesFound} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {placesShown.map((place, i) => (
                <PlaceCard key={place.name} isPremium={place.isPremium}/>
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

Main.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  placesFound: PropTypes.number,
};

export default Main;
