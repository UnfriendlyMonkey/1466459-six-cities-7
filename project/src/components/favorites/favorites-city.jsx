import React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

function FavoritesCity (props) {
  const {city, offers} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard key={offer.id} offer={offer} fromFavorites/>
        ))}
      </div>
    </li>
  );
}

FavoritesCity.propTypes = {
  city: PropTypes.string,
  offers: PropTypes.arrayOf(
    offerType,
  ).isRequired,
};

export default FavoritesCity;
