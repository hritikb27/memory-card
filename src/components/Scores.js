import React from "react"

function Scores(props) {
    return(
        <div>
            <h2>Score: {props.scoreNum}</h2>
            <h2>Best Score: {props.best}</h2>
        </div>
    )
}

export default Scores