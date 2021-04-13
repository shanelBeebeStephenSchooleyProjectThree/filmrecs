import { useState } from 'react'

const IndividualRec = ({review}) => {
    const [hideReview, setHideReview] = useState('hidden')

    const handleClick = () => {
        hideReview === 'hidden' ?
        setHideReview('') :
        setHideReview('hidden')
    }
    return (
        <div className="userRec">
                <div className="userRecHeading">
                    <h3>Film: {review.filmName}</h3>
                    {review.username 
                    ? <h3>Recommended by {review.username}</h3>
                    : <h3>Recommended by Anonymous</h3>}
                </div>
                <div >
                   {hideReview === 'hidden' ? (
                       <h3 onClick={handleClick}>See Review</h3>

                   ) :
                   (<h3 onClick={handleClick}>Hide Review</h3>)
                   } 
                </div>
                <div className={`userRecText ${hideReview}`}>
                    <p>{review.reviewText}</p>
                </div>
            </div>
    )
}

export default IndividualRec
