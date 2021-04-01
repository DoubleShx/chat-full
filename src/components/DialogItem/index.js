import React from 'react'
import './DialogItem.scss'
import {Row, Col} from 'antd'
import ruLocale from 'date-fns/locale/ru'
import classNames from 'classnames'
import { format } from 'date-fns'
import Time from '../Time'

const DialogItem = ({avatar, name, lastmessage, date, isOnline=false}) => {
    


    return(
        <Row span={24} className="dialogs__item">
            <Col span={5} className="avatar_dialog">
                { avatar
                ? <img className={classNames("img_avatar_dialog", {isOnline: isOnline})} src={avatar}/>
                : <div className={classNames("avatar_dialog_round", {isOnline: isOnline})}><span>{name.slice(0,1)}</span></div>
                }
            </Col>
            <Col span={19} className="dialog_item_name_message">
                <Row span={24} className="dialog_item_name">
                    <span><h3>{name}</h3></span>
                    <span className="date_last_message">
                        <Time date={date} /> 
                        </span>
                </Row>
                <Row span={24} > 
                    <span className="dialog_item_message"><p>{lastmessage}</p></span>
                    <div className="unreaded">4</div>
                </Row>
            </Col>
        </Row>
    )
}

export default DialogItem