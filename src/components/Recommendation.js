import '../App.css'

const Recommendation = (props) => {
    
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.overview}</p>
            <p>{props.releaseDate}</p>
            <p>{props.avgRating}</p>
            <p>{props.poster}</p>
        </div>
    )
}

export default Recommendation
