import React from 'react'

import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
import { Avatar } from 'antd';
import { CheckCircleFilled, EyeInvisibleFilled  } from '@ant-design/icons'

import './Message.scss'
import classNames from 'classnames';

const Message = ({text=null, date=null, avatar, box, attachments=null, checked = false}) => {
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
                <div className={classNames("message_text", {'textIsntExist': !text})}>
                <p>{text}</p>                
                </div>  
                {attachments 
                ? <ul className="attachments"> 
                    {attachments.map(el => {
                        return (<li key={el.id}><img src={el.url} alt={el.fileName}/></li>)
                 }) } </ul>
                : null }
                { checked
                ? <CheckCircleFilled className="checked" />
                : <EyeInvisibleFilled className='checked'/> }          
            </div>

            
            <p className="message_date">{formatDistanceToNow(new Date(date), {addSuffix: true, locale: ruLocale})}</p>
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