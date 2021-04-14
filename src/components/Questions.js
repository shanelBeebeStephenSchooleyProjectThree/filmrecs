import filmReel from '../assets/filmReel.jpg'
import cinema from '../assets/cinema.jpg'
import audience from '../assets/movieAudience.jpg'

import '../App.css';


const Questions = ((props) => {
    
    return (
        <div className={`wrapper ${props.hideQuestions}`}>
            <h2>Let's start by answering a few questions first...</h2>
            <div className='container'>
                <div className='imageContainer'>
                    <img src={filmReel} alt='Film Reel'/>
                </div>
                <div className='textContainer'>
                    <p>What genre are you in the mood for?</p>
                    <form>
                        <label htmlFor='genre'></label>
                        <select 
                        onChange={props.getSelectedGenre} 
                        name='genre' 
                        id='genre'
                        defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled>Genre...</option>
                            <option value={28}>Action</option>
                            <option value={12}>Adventure</option>
                            <option value={16}>Animation</option>
                            <option value={35}>Comedy</option>
                            <option value={80}>Crime</option>
                            <option value={99}>Documentary</option>
                            <option value={18}>Drama</option>
                            <option value={1051} >Family</option>
                            <option value={14}>Fantasy</option>
                            <option value={36}>History</option>
                            <option value={27}>Horror</option>
                            <option value={1002} >Music</option>
                            <option value={968} >Mystery</option>
                            <option value={1049} >Romance</option>
                            <option value={87} >Sci-Fi</option>
                            <option value={53}>Thriller</option>
                            <option value={1052} >War</option>
                            <option value={37}>Western</option>
                        </select>        
                    </form>
                </div>
            </div>
            <div className='container'>
            <div className='textContainer'>
                    <p>Modern cinema, golden era or something else?
                        Pick a time period…
                    </p>
                    <form>
                        <label htmlFor='decade'></label>
                        <select 
                        onChange={props.getSelectedDates} 
                        name='decade' 
                        id='decade'
                        defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled>Time Period...</option>
                            <option 
                            value='early' 
                            data-startdate="1920-01-01" 
                            data-enddate="1949-12-31">Before 1950</option>
                            <option 
                            value='fifties' 
                            data-startdate="1950-01-01" 
                            data-enddate="1959-12-31">1950s</option>
                            <option 
                            value='sixties' 
                            data-startdate="1960-01-01" 
                            data-enddate="1969-12-31">1960s</option>
                            <option 
                            value='seventies' 
                            data-startdate="1970-01-01" 
                            data-enddate="1979-12-31">1970s</option>
                            <option 
                            value='eighties' 
                            data-startdate="1980-01-01" 
                            data-enddate="1989-12-31">1980s</option>
                            <option 
                            value='nineties' 
                            data-startdate="1990-01-01" 
                            data-enddate="1999-12-31">1990s</option>
                            <option 
                            value='zeros' 
                            data-startdate="2000-01-01" 
                            data-enddate="2009-12-31">2000s</option>
                            <option 
                            value='tens' 
                            data-startdate="2010-01-01" 
                            data-enddate="2021-03-31">2010s and beyond</option>
                        </select>                    
                    </form>
                </div>
                <div className='imageContainer middleImage'>
                    <img src={cinema} alt='Exterior of a cinema'/>
                </div>
            </div>
            <div className='container'>
                <div className='imageContainer'>
                    <img src={audience} alt='Audience in a cinema'/>
                </div>
                <div className='textContainer'>
                    <p>Do you want a good movie or a movie so bad it’s good?
                        Pick a viewer rating…
                    </p>
                    <form>
                        <label htmlFor='rating'></label>
                        <select 
                        onChange={props.getSelectedRating} name='rating' 
                        id='rating'
                        defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled>Rating (out of 10)...</option>
                            <option data-low-rating={0} data-high-rating={3.9}>Less than 4</option>
                            <option data-low-rating={4} data-high-rating={10}>4+</option>
                            <option data-low-rating={5} data-high-rating={10}>5+</option>
                            <option data-low-rating={6} data-high-rating={10}>6+</option>
                            <option data-low-rating={7} data-high-rating={10}>7+</option>
                            <option data-low-rating={8} data-high-rating={10}>8 or higher</option>
                            
                        </select>
                    </form>
                </div>
            </div>
            <button className="getRec" onClick={props.handleSubmit}>Get your rec</button>
        </div>
    )
})

export default Questions