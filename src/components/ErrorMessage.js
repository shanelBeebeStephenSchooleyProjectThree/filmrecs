

const ErrorMessage = (props) => {
    return (
        <div className={`recommendation ${props.hideRec}`}>
            <h3>Sorry!</h3>
            <p>Your answers produced no result. </p>
            <p onClick={props.resetQuestions}>Try Again!</p>
        </div>
    )
}

export default ErrorMessage
