import {arrayOf, bool, shape, number, string, objectOf} from 'prop-types';

export const offerType = shape({
  bedrooms: number,
  city: shape({
    location: objectOf(number),
    name: string,
  }),
  description: string,
  goods: arrayOf(string),
  host: shape({
    avatarUrl: string,
    id: number,
    isPro: bool,
    name: string,
  }),
  id: number.isRequired,
  images: arrayOf(string),
  isFavorite: bool.isRequired,
  isPremium: bool.isRequired,
  location: objectOf(number),
  maxAdults: number,
  previewImage: string.isRequired,
  price: number.isRequired,
  rating: number,
  title: string.isRequired,
  type: string.isRequired,
});
