import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

function OffersList (props) {
  const {offers} = props;
  const setActiveOffer = useState(null)[1];

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} onHover={setActiveOffer} />
      ))}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    offerType,
  ).isRequired,
};

export default OffersList;
