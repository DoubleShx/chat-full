import React, {useState, useRef, useEffect} from 'react'
import './AudioMessage.scss'
import playSvg from '../../assets/img/play.svg'
import pauseSvg from '../../assets/img/pause.svg'
import audioWave from '../../assets/img/audioWave.svg'
import TimeHelper from '../../utilities/helpers/timeHelper'


const AudioMessage = ({audioLink}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progressTime, setProgressTime] = useState(0);
    useEffect(() => {
        audioElem.current.volume = '0.1'
        audioElem.current.addEventListener(
            "playing",
            () => setIsPlaying(true) ,
            false
        );
        audioElem.current.addEventListener(
            "ended",
            () => { setIsPlaying(false);
                setCurrentTime(0);
                setProgressTime(0)
            }
        );
        audioElem.current.addEventListener(
            "pause",
            () => setIsPlaying(false),
            false
        );
        audioElem.current.addEventListener(
            'timeupdate', () => {
                
               setCurrentTime(audioElem.current.currentTime);
               setProgressTime(audioElem.current.currentTime/audioElem.current.duration *100)
            }
        )
    })
    
    const audioElem = useRef(null);
    const toggleAudio = () => {        
        if (!isPlaying) {
        audioElem.current.play()
        } else audioElem.current.pause();
    }
        return (
            <div className="audioMessage">
                <button className="btn_play_pause" onClick={toggleAudio}>
                    {isPlaying ? <img src={pauseSvg} alt="Pause svg"/> : <img src={playSvg} alt="Play svg"/>}
                </button>
                <audio ref={audioElem} src={audioLink} preload="auto" volume="1"/>
                <span className="waves">
                    <span className="progressBar" style={{width:progressTime+'%'}}></span><img  className="wave" src={audioWave} alt="audio"/><img className="wave" src={audioWave} alt="audio"/><img className="wave" src={audioWave} alt="audio"/><img className="wave" src={audioWave} alt="audio"/></span>
                <span className="audioTimeCode">{TimeHelper(currentTime)}</span>
            </div>
        )
}
export default AudioMessage;