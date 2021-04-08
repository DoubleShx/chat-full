import React from 'react'
import './DialogItem.scss'
import {Row, Col} from 'antd'
import classNames from 'classnames'
import Time from '../Time'
import {gradientGenerate} from '../../utilities/index'
import GradientAvatar from '../GradientAvatar'

const DialogItem = ({avatar, name, lastmessage, date, id, SelectDialog, isOnline=false}) => {
    const gradient = gradientGenerate(name)


    return(
        <Row span={24} className="dialogs__item" onClick={()=>SelectDialog(id)}>
            <Col span={5} className="avatar_dialog">
                { avatar
                ? <img className={classNames("img_avatar_dialog", {isOnline: isOnline})} src={avatar} alt="avatar"/>
                : <GradientAvatar name={name} className={classNames("avatar_dialog_round", {isOnline: isOnline})}/>
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