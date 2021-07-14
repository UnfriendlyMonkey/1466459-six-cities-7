import React, {useState} from 'react';

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

  const stars = [['5', 'perfect'], ['4', 'good'], ['3', 'not bad'], ['2', 'badly'], ['1', 'terribly']];

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) => (
          <React.Fragment key={star[1]}>
            <input className="form__rating-input visually-hidden" name="rating" value={star[0]} id={`${star[0]}-stars`} type="radio" onChange={handleRatingChange}/>
            <label htmlFor={`${star[0]}-stars`} className="reviews__rating-label form__rating-label" title={star[1]}>
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
