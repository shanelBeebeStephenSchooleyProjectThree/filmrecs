import firebase from '../firebase';
import React, { useState, useEffect } from 'react';

const UserReviews = () => {
    useEffect( () => {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
            const newState = [];
            const data = response.val()
            for (let key in data) {
                newState.unshift(data[key]);
            } 
            setReviews(newState);   
        })
    }, [])
    const [reviews, setReviews] = useState([]);


    return (
        <div className="wrapper">
            <h3>User Recommendations:</h3>
            {reviews.map((review) => {
          return (
            <div className="userRec">
                <div className="userRecHeading">
                    <h3>Film: {review.filmName}</h3>
                    {review.username 
                    ? <h3>Recommended by {review.username}</h3>
                    : <h3>Recommended by Anonymous</h3>}
                </div>
                <div>
                    <h3>Review</h3>
                </div>
                <div classname="userRecText">
                    <p>{review.reviewText}</p>
                </div>
            </div>
          )
        })
        }
        </div>
    )
}

export default UserReviews