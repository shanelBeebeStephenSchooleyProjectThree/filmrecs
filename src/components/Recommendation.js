import '../App.css'

const Recommendation = (props) => {
    
    return (
        <div className='recommendation'>
            <div className="recText">
                <h3>Our Recommendation</h3>
                <ul>
                    <li>
                        <h3>Film:</h3>
                        <p>{props.title}</p>
                    </li>
                    <li>
                        <h3>Synopsis:</h3>
                        <p>{props.overview}</p>
                    </li>
                    <li>
                        <h3>Release Date:</h3>
                        <p>{props.releaseDate}</p>
                    </li>
                    <li>
                        <h3>Average Viewer Rating:</h3>
                        <p>{props.avgRating} / 10</p>
                    </li>
                </ul>
            </div>
            <div className="recImage">
                <img src={props.poster} alt={`Film poster for ${props.title}`}/>
            </div>
            <button onClick={props.handleSubmit}>Get A New Rec</button>
            <p className="reset">Change Your Answers</p>
        </div>
    )
}

export default Recommendation
