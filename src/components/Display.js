import React from "react"
import {v4} from 'uuid'

function Display(props) {
    const images= [
    'https://img.buzzfeed.com/store-an-image-prod-us-east-1/Jim1MCl5c.png?output-format=jpg',
    'https://i.pinimg.com/736x/40/0e/0c/400e0cfa31e105819a6f3727e42cd2b8.jpg',
    'https://i.pinimg.com/736x/57/3f/22/573f22a1aa17b366f5489745dc4704e1.jpg',
    'https://cdn131.picsart.com/342580601043201.jpg',
    'https://cdn.vox-cdn.com/thumbor/Z6PAPzGfqK5n4Q7oBnUk5aNOL6Q=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22814568/jbareham_210827_ecl1072_summer_streaming_2021_anime.jpg',
    'https://i.pinimg.com/736x/0e/3e/d0/0e3ed05ff407671bdebf77b53ce0e0b9.jpg',
    'https://64.media.tumblr.com/53a4d9b3e442ce22a06ff65bcac49d6e/cb882a522fc506d1-12/s1280x1920/a298511aee30dab4332eb3216dc5c90a56dcac52.jpg',
    'https://i.pinimg.com/originals/e9/c8/2c/e9c82ccdd53ba0b5c84b7351ca99f639.jpg',
    'https://i.pinimg.com/736x/cc/d4/35/ccd435ab821dc00640d695c66a6f320f.jpg',
    'https://i.pinimg.com/564x/e4/ce/85/e4ce859b08beaca48f1472494edaeeef.jpg'
]

    const randNum = props.rand

    return(
        <div style={{display:"grid", gridTemplateColumns:"repeat(5, 1fr)", gridAutoRows:"minmax(100px, auto)", gap:"100px"}}>
            {randNum.map(element => {
                return <img src={images[element]} style={{maxWidth:"200px", maxHeight:"400px"}} onClick={(e)=>props.onHandleClick(e.target.id)} id={element}></img>
            })}
        </div>
    )
}

export default Display