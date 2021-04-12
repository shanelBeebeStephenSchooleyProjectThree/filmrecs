import React from 'react'
import '../App.css';
import firebase from '../firebase';
import { useState, useEffect } from 'react';



export const SubmitReview = () => {
    const [userFilm, setUserFilm] = useState('');
    const [username, setUsername] = useState('');
    const [userReview, setUserReview] = useState('');

    const newReview = {
    filmName: userFilm,
    reviewText: userReview,
    username: username,
    }

    const handleFilmChange = (event) => {
        setUserFilm(event.target.value);
    }

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleUserReview = (event) => {
        setUserReview(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(newReview);
        setUserFilm('');
        setUsername('');
        setUserReview('');
    }

  

    return (
        <div className="wrapper">
            <h3>Leave your own recommendation:</h3>
            <form>
                <div className="submitHeader">
                    <input onChange={handleFilmChange} id="userFilm" type="text" placeholder="FILM:"></input>
                    <input onChange={handleUsername}id="username" type="text" placeholder="YOUR NAME (OPTIONAL):"></input>
                </div>
                <textarea  onChange={handleUserReview} id="userReview" className="submitText" maxlength="2500" placeholder="YOUR REVIEW:"></textarea>
            </form>
            <button onClick={handleClick}>Submit Rec</button>
        </div>
    )
}

export default SubmitReview