import React, {useState} from 'react';

const STARS = {'1': 'terribly', '2': 'badly', '3': 'not bad', '4': 'good', '5': 'perfect'};

function CommentForm() {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleRatingChange = ({target}) => {
    setRating(parseInt(target.value, 10));
  };

  const handleCommentChange = ({target}) => {
    setComment(target.value);
  };

  const isDisabled = (rating && comment) ? '' : 'disabled';

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.keys(STARS).reverse().map((star) => (
          <React.Fragment key={STARS[star]}>
            <input className="form__rating-input visually-hidden" name="rating" value={star} id={`${star}-stars`} type="radio" onChange={handleRatingChange}/>
            <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title={STARS[star]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
