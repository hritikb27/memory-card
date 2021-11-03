import React, { useState, useEffect } from "react";
import Display from "./Display";
import Scores from "./Scores";

function GameLogic() {
    const [randNumArray, setRandNumArray] = useState([]);
    const [streak, setStreak] = useState([])
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    function setNewRandNumArray() {
        const newArray = []

        while (newArray.length < 5) {
            const randNum = Math.floor(Math.random() * 5);
            if (!newArray.includes(randNum)) {
                newArray.push(randNum)
            }
        }

        setRandNumArray(newArray)
    }

    function handleClick(id) {
        setNewRandNumArray()
        if (streak.includes(id)) {
            setScore(0)
        } else {
            setStreak(prevState => {
                return [...prevState, id]
            })
            setScore(prevState=> prevState+1)
            setBestScore(prevState=> prevState+1)
        }
    }


    useEffect(() => {
        setNewRandNumArray()
    }, [])

    return (
        <div>
            <Scores scoreNum={score} best={bestScore} />
            <Display rand={randNumArray} onHandleClick={handleClick} />
        </div>
    )
}

export default GameLogic