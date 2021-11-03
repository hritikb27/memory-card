import React from "react"
import {v4} from 'uuid'

function Display(props) {
    const images= [
    'https://img.buzzfeed.com/store-an-image-prod-us-east-1/Jim1MCl5c.png?output-format=jpg',
    'https://i.pinimg.com/736x/40/0e/0c/400e0cfa31e105819a6f3727e42cd2b8.jpg',
    'https://i.pinimg.com/736x/57/3f/22/573f22a1aa17b366f5489745dc4704e1.jpg',
    'https://cdn131.picsart.com/342580601043201.jpg',
    'https://assets-prd.ignimgs.com/2021/09/09/jujutsu-1631147389461.jpg'
]

    const randNum = props.rand

    return(
        <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", backgroundColor:"red", gridAutoRows:"minmax(100px, auto)", gap:"10px"}}>
            {randNum.map(element => {
                return <img src={images[element]} style={{maxWidth:"200px", maxHeight:"400px"}} onClick={(e)=>props.onHandleClick(e.target.id)} id={element}></img>
            })}
        </div>
    )
}

export default Display