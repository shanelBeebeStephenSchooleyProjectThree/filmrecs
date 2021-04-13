import React from 'react'
import '../App.css';
import firebase from '../firebase';
import { useState } from 'react';



export const SubmitReview = () => {
    const [userFilm, setUserFilm] = useState('');
    const [username, setUsername] = useState('');
    const [userReview, setUserReview] = useState('');
    const [required, setRequired] = useState('Submit Rec')

    const newReview = {
    filmName: userFilm,
    reviewText: userReview,
    username: username,
    }

    const handleFilmChange = (event) => {
        setUserFilm(event.target.value);
        if(userFilm && userReview) {
            setRequired('Submit Rec')
        }
    }
    
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    
    const handleUserReview = (event) => {
        setUserReview(event.target.value);
        if(userFilm && userReview) {
            setRequired('Submit Rec')
        }
    }
   
    const handleClick = (event) => {
        event.preventDefault();
        if(userFilm && userReview){
            const dbRef = firebase.database().ref();
            dbRef.push(newReview);
            setUserFilm('');
            setUsername('');
            setUserReview('');
            setRequired('Submit Rec')

        } else {
            setRequired("Fill Required Fields")
        }
    }


    return (
        <div className="wrapper">
            <h3>Leave your own recommendation:</h3>
            <form>
                <div className="submitHeader">
                    <input 
                    onChange={handleFilmChange} id="userFilm" 
                    type="text" 
                    placeholder="FILM:" 
                    value={userFilm}
                    ></input>
                    <input 
                    onChange={handleUsername}
                    id="username" 
                    type="text" 
                    placeholder="YOUR NAME (OPTIONAL):"
                    value={username}
                    ></input>
                </div>
                <textarea  
                onChange={handleUserReview} 
                id="userReview" 
                className="submitText" 
                maxlength="2500" 
                placeholder="YOUR REVIEW:"
                value={userReview}
                ></textarea>
            </form>
            <button 
            onClick={handleClick}
            >{required}</button>
        </div>
    )
}

export default SubmitReview