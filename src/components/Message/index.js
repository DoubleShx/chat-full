import React from 'react'

import PropTypes from 'prop-types'

import { Avatar } from 'antd';
import { CheckCircleFilled, EyeInvisibleFilled  } from '@ant-design/icons'


import './Message.scss'
import classNames from 'classnames';
import Time from '../Time';
import AudioMessage from '../AudioMessage';

const Message = ({text=null, date=null, avatar, box, attachments=null, checked = false, isTyping=false, audio=null}) => {
    const audioLink='https://notificationsounds.com/storage/sounds/file-sounds-1148-juntos.ogg'
    let isMessageInbox;
    if (box.includes('inbox')) {
        isMessageInbox = true;
    }
    else isMessageInbox = false;
    return (
        <div className={classNames('message_container', {"message_container_left": !isMessageInbox, "message_container_right": isMessageInbox })}> 
            <div className="message">
                <div className="message_avatar">
                <Avatar className="avatar_circle">{avatar}</Avatar>
                </div>                
                <div className={classNames("message_text", {'textIsntExist': !text && !isTyping})}>
                    {
                    <AudioMessage audioLink={audioLink}/>
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

            
            <Time date={date}/>
        </div>
    )
}
Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    box: PropTypes.string,
    checked: PropTypes.bool,
    attachments: PropTypes.array
}

export default Message;