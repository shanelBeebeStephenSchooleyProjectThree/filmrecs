import '../App.css';
import filmReel from '../assets/filmReel.jpg'
import cinema from '../assets/cinema.jpg'
import audience from '../assets/movieAudience.jpg'
const Questions = () => {
    
    return (
        <div className='wrapper'>
            <h2>Let's start by answering a few questions first...</h2>
            <div className='container'>
                <div className='imageContainer'>
                    <img src={filmReel} alt='Film Reel'/>
                </div>
                <div className='textContainer'>
                    <p>What genre are you in the mood for?</p>
                    <form>
                        <label></label>
                        <input></input>
                    </form>
                </div>
            </div>
            <div className='container'>
            <div className='textContainer'>
                    <p>Modern cinema, golden era or something else?
                        Pick a time period…
                    </p>
                    <form>
                        <label htmlFor='genre'></label>
                        <select name='genre' id='genre'>
                            <option selected disabled>Genre...</option>
                            <option value='28'>Action</option>
                            <option value='12'>Adventure</option>
                            <option value='16'>Animation</option>
                            <option value='35'>Comedy</option>
                            <option value='80'>Crime</option>
                            <option value='99'>Documentary</option>
                            <option value='18'>Drama</option>
                            <option value='10751'>Family</option>
                            <option value='14'>Fantasy</option>
                            <option value='36'>History</option>
                            <option value='27'>Horror</option>
                            <option value='10402'>Music</option>
                            <option value='9648'>Mystery</option>
                            <option value='10749'>Romance</option>
                            <option value='878'>Sci-Fi</option>
                            <option value='53'>Thriller</option>
                            <option value='10752'>War</option>
                            <option value='37'>Western</option>
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
                        <label htmlFor=''></label>
                        <select name='genre' id='genre'>
                            <option selected disabled>Genre...</option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>

                        </select>                     </form>
                </div>
            </div>
            <button>Get your rec</button>
        </div>
    )
}

export default Questions