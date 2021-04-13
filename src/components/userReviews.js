import firebase from '../firebase';
import React, { useState, useEffect } from 'react';
import IndividualRec from './IndividualRec';

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
              <IndividualRec review={review}/>
          )
        })
        }
        </div>
    )
}

export default UserReviews