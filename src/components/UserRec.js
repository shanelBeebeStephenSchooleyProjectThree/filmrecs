import firebase from '../firebase';
import React, { useState, useEffect } from 'react';
import IndividualRec from './IndividualRec';

const UserRec = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
            const newState = [];
            const data = response.val()
            for (let key in data) {
                newState.unshift({key: key, rec: data[key]});
            } 
            setReviews(newState);   
        })
    }, [])
   
    return (
        <div className="wrapper">
            <h3>User Recommendations:</h3>
            {reviews.map((review) => {
          return (
              <IndividualRec key={review.key} review={review.rec}/>
          )
        })
        }
        </div>
    )
}

export default UserRec;