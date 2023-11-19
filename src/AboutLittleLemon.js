import ReactPlayer from "react-player/youtube";
function AboutLittleLemon() {
    const vidURL ='https://youtube.com/shorts/ddb3J_Tk1Tg'
    return (
        <div>
            <h1>About Weka's Books</h1>
            <ReactPlayer 
            url={vidURL}
            playing={false}
            volume={0.8}
            ></ReactPlayer>
        </div>
    )
}

export default AboutLittleLemon
