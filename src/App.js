import './App.css';
import Header from './components/Header';
// import Recommendation from './components/Recommendation';
import Footer from './components/Footer';
import Questions from './components/Questions';
import React, { useState, useEffect } from 'react';


function App() {
  
  const [genre, setGenre] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [lowRating, setLowRating] = useState(0);
  const [highRating, setHighRating] = useState(10);

  const getSelectedGenre = (e) => {
    setGenre(e.target.value);
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
    console.log(`https://api.themoviedb.org/3/discover/movie?api_key=70bf0d125d0d890aaada4fc8639854d0&language=en-US&with_genres=${genre}&vote_average.gte=${lowRating}&vote_average.lte=${highRating}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`);
  }

  return (
    <div className='app'>
      <Header />
      <Questions
        getSelectedGenre={getSelectedGenre}
        getSelectedDates={getSelectedDates}
        getSelectedRating={getSelectedRating}
        handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
