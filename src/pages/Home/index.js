import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Message from '../../components/Message'
import Dialogs from '../../components/Dialogs'
import { Row, Col, Empty } from 'antd'

import { dialogsActions } from '../../redux/actions'
import {messagesActions} from '../../redux/actions'

import './Home.scss'
import ChatProperties from '../../components/chatProperties'
import SearchPanel from '../../components/searchPanel'
import {LinkOutlined, BellOutlined, SmileOutlined, AudioOutlined} from '@ant-design/icons'



const Home = (props) => {
    const {dialogs, messages, fetchDialogs, setCurrentDialog, fetchMessages} = props
    const audioLink='https://notificationsounds.com/storage/sounds/file-sounds-1148-juntos.ogg';
    const [dialogspart, SetDialog] = useState(dialogs.items);
    const [filtered, SetFilterDialog] = useState('');
    const [selectedDialog, SetSelectedDialog] = useState([{text:null, avatar: null, box:null, checked:null, date:null, id: null}])    

    // -----------------------------------------------------------------------------------------------------

    useEffect(() => {
        if (!dialogs.items.length) {
        fetchDialogs(); }
        else {
        SetDialog(dialogs.items) }
    }, [dialogs.items])

    const searchDialog = (searchItem) => {    
        SetDialog(dialogs.items.filter(el=> el.name.toLowerCase().includes(searchItem.toLowerCase()) || el.lastmessage.toLowerCase().includes(searchItem.toLowerCase()))) ;
        SetFilterDialog(searchItem)
    }


    // --------------------------------------------------------------------------------------------------------
    useEffect(() => {
        fetchMessages(messages.messages)
        }, [])

    const SelectDialog = (id) => {
        let messageRender = messages.messages.filter(el=> el.id === id)
        if (!!messageRender[0]) {
        SetSelectedDialog(messages.messages.filter(el=> el.id === id))
        } else {
        SetSelectedDialog([{text:null, avatar: null, box:null, checked:null, date:null, id: null}])
        }
        setCurrentDialog(id)
    }
    useEffect(() => {
        console.log(!!selectedDialog[0].avatar)
    }, [dialogs.currentDialog])






    return (
        
        <section className="Home">
            <Row>
            <Col xs={{span:24,  order: 1 }} sm={8} className="searchPanel">
                <SearchPanel searchDialog={searchDialog} filtered={filtered}/>
            </Col>
            <Col xs={{span:24, order: 3 }} sm={16} className="chatProperties">
                <ChatProperties />
            </Col>            
                <Col xs={{span:24, order: 2 }} sm={8}  className="dialogues">
                    <Dialogs items={dialogspart} SelectDialog={SelectDialog}/>
                </Col>
                <Col xs={{span:24, offset:0, order: 4 }} sm={{span:16, offset:8}} className="chatContainer_media"> 
            <div className="chatContainer">
                <div className="chat">
                    <div className="messages" >
                  {selectedDialog[0].avatar ? selectedDialog.map((el, index) => {
                      return <Message  selectedDialog={selectedDialog[index]} key={index}/>
                  }) : <Empty className="emptyData"/>}
                

                </div>
                    <div className="message_input">
                        <LinkOutlined className="attach"/>
                        <input/> 
                        <span>
                            <BellOutlined className="notify"/>
                            <SmileOutlined className="smile"/>
                            <AudioOutlined className="audio_attach"/>
                        </span>
                     </div>
                </div>
            </div>
            </Col>
            </Row>
        </section>
    )
}
const mapStateToProps = (dialogs, ...messages) => dialogs;


export default connect(
    mapStateToProps,
    {...dialogsActions, ...messagesActions}
  )(Home);