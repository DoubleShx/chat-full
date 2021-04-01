import React, {useState} from 'react'
import './AudioMessage.scss'
import playSvg from '../../assets/img/play.svg'
import pauseSvg from '../../assets/img/pause.svg'
import audioWave from '../../assets/img/audioWave.svg'


const AudioMessage = ({audioLink}) => {
    const [isPlaying, setIsPlaying] = useState(false);
        return (
            <div className="audioMessage">
                <button className="btn_play_pause">
                    {isPlaying ? <img src={pauseSvg} alt="Pause svg"/> : <img src={playSvg} alt="Play svg"/>}
                </button>
                <span className="waves"><img  className="wave" src={audioWave} alt="audio"/><img className="wave" src={audioWave} alt="audio"/><img className="wave" src={audioWave} alt="audio"/><img className="wave" src={audioWave} alt="audio"/></span>
                <span className="audioTimeCode"><p>00:19</p></span>
            </div>
        )
}
export default AudioMessage;