import React from 'react'

import PropTypes from 'prop-types'

import { CheckCircleFilled, EyeInvisibleFilled  } from '@ant-design/icons'


import './Message.scss'
import classNames from 'classnames';
import Time from '../Time';
import AudioMessage from '../AudioMessage';
import GradientAvatar from '../GradientAvatar';

const Message = ({selectedDialog}) => {
    let {text=null, date=null, avatar=null, box='inbox', attachments=null, checked = false, isTyping=false, audioLink=null} = selectedDialog
    console.log(selectedDialog)
    return ( <div>
        <div className={classNames('message_container', {"message_container_left": box='inbox', "message_container_right": box!='inbox' })}>
             { selectedDialog ? <>
            <div className="message">
                <div className="message_avatar">
                    { avatar ? <GradientAvatar name={avatar} className="avatar_circle"/> : null }
                </div>                
                <div className={classNames("message_text", {'textIsntExist': !text && !audioLink && !isTyping})}>
                    { audioLink?
                    <AudioMessage audioLink={audioLink}/> : null
                    }
                   
                <p>
                    {text} 

                </p>    
                {isTyping ? <div className="isTyping"> 
                    <span></span><span></span><span></span>
                    </div> : null}            
                </div>  
                {attachments 
                ? <ul className={classNames({'attachments': text, "attachments_without_text": !text})}> 
                    {attachments.map(el => {
                        return (<li key={el.id}><img src={el.url} alt={el.fileName}/></li>)
                 }) } </ul>
                : null }
                { checked
                ? <CheckCircleFilled className="checked" />
                : <EyeInvisibleFilled className='checked'/> }          
            </div>

            
            <Time date={date}/>  </>: null
            }
        </div>
        </div>
    )
}
// Message.propTypes = {
//     avatar: PropTypes.string,
//     text: PropTypes.string,
//     date: PropTypes.string,
//     box: PropTypes.string,
//     checked: PropTypes.bool,
//     attachments: PropTypes.array
// }

export default Message;