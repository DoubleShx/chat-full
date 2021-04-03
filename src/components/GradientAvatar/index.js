import React from 'react' 
import {gradientGenerate} from '../../utilities'
import './GradientAvatar.scss'

const GradientAvatar = ({name, className}) => {
    const gradient = gradientGenerate(name)
    return(
            <div className={className} style={{background: `linear-gradient(${gradient.color}, ${gradient.lighterColor})`, alignItems: `center`}}>
               <p className="nameOfAvatar"> {name.slice(0,1)}</p>
            </div>
    )
}
export default GradientAvatar;