import './App.css';
import Header from './components/Header';
import Recommendation from './components/Recommendation';
import ErrorMessage from './components/ErrorMessage'
import Footer from './components/Footer';
import Questions from './components/Questions';
import React, { useState } from 'react';
import axios from 'axios';
import UserReviews from './components/UserReviews'
import SubmitReview from './components/SubmitReview';




function App() {
  // State for user input
  const [genre, setGenre] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [lowRating, setLowRating] = useState(0);
  const [highRating, setHighRating] = useState(10);

  // State for recommendation based on API call
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [avgRating, setAvgRating] = useState('');
  const [poster, setPoster] = useState('');
  const [error, setError] = useState('');

  // State for hidden class
  const [hideRec, setHideRec] = useState('hidden');
  const [hideQuestions, setHideQuestions] = useState('');

  const getSelectedGenre = (e) => {
    setGenre(parseInt(e.target.value));
  }
  
  const getSelectedDates = (e) => {
    const selected = e.target[e.target.selectedIndex]
    setStartDate(selected.dataset.startdate);
    setEndDate(selected.dataset.enddate);
  }

  const getSelectedRating = (e) => {
    const selected = e.target[e.target.selectedIndex]
    setLowRating(selected.dataset.lowRating);
    setHighRating(selected.dataset.highRating);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // variable for query parameters that have a . in them
    const startReleaseDate = 'primary_release_date.gte'
    const endReleaseDate = 'primary_release_date.lte'
    const startRating = 'vote_average.gte'
    const endRating = 'vote_average.lte'
    const voteCount = 'vote_count.gte'

    axios( {
      method:'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      responseType: 'json',
        params: {
          api_key: '70bf0d125d0d890aaada4fc8639854d0',
          language: 'en-US',
          with_genres: genre,
          [startReleaseDate]: startDate,
          [endReleaseDate]: endDate,
          [startRating]: lowRating,
          [endRating]: highRating,
          [voteCount]: 10
        }
      })
      .then(function (res) {
        setError('');
        setHideRec('');
        setHideQuestions('hidden')
        const resultsArray = res.data.results;
        const randomIndex = Math.floor(Math.random() * resultsArray.length)
        if(resultsArray.length !== 0) {
          const randomFilm = resultsArray[randomIndex];
          const posterURL = 'https://image.tmdb.org/t/p/w500'
          const posterPath = randomFilm.poster_path;
          const voteAvg = randomFilm.vote_average;
          
          setPoster(posterURL + posterPath)
          setTitle(randomFilm.title)
          setOverview(randomFilm.overview)
          setAvgRating(voteAvg)
          setReleaseDate(randomFilm.release_date);
        } else {
          setError('No Results')
        }

        
      });
  }

  const resetQuestions = () => {
    setHideQuestions('');
    setHideRec('hidden')
  }

  return (
    <div className='app'>
      <Header />
      <Questions
        getSelectedGenre={getSelectedGenre}
        getSelectedDates={getSelectedDates}
        getSelectedRating={getSelectedRating}
        handleSubmit={handleSubmit}
        hideQuestions={hideQuestions}
        />
        {!error ?
        <Recommendation 
        handleSubmit={handleSubmit}
        title={title}
        overview={overview}
        releaseDate={releaseDate}
        avgRating={avgRating}
        poster={poster}
        hideRec={hideRec}
        resetQuestions={resetQuestions}
        /> :
        <ErrorMessage 
        hideRec={hideRec}
        resetQuestions={resetQuestions}
        />}
        <SubmitReview />
        <UserReviews />
      <Footer />  
    </div>
  );
}

export default App;
