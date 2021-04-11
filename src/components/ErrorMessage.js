

const ErrorMessage = (props) => {
    return (
        <div className={`error wrapper ${props.hideRec}`}>
            <div className="errorText">
                <h3>Sorry!</h3>
                <p>Your answers produced no result. </p>
                <p className="retry" onClick={props.resetQuestions}>Try Again!</p>
            </div>
        </div>
    )
}

export default ErrorMessage
