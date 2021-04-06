import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Message from '../../components/Message'
import Dialogs from '../../components/Dialogs'
import { Row, Col } from 'antd'

import { dialogsActions } from '../../redux/actions'

import './Home.scss'
import ChatProperties from '../../components/chatProperties'
import SearchPanel from '../../components/searchPanel'
import {LinkOutlined, BellOutlined, SmileOutlined, AudioOutlined} from '@ant-design/icons'



const Home = () => {
    const date = 'Wed Apr 01 2021 13:05:04';
    const DialogItems = [
        {name: 'doubled', lastmessage:'lorem', isOnline: true, date: date, id:1},
        {name: 'tripled', lastmessage:'ipsum', date: 'Wed Apr 01 2021 13:05:04', id:2},
        {name: 'doubled', lastmessage:'dolor', isOnline: true, date: 'Wed Apr 18 2020 13:05:04', id:3},
        {name: 'doubled', lastmessage:'dollar', isOnline: true, date: 'Wed Apr 03 2020 13:05:04', id:5},
        {name: 'doubled', lastmessage:'box', isOnline: true, date: 'Wed Apr 03 2020 13:05:04', id:6},
        {name: 'doubled', lastmessage:'picture', isOnline: true, date: 'Wed Apr 03 2020 13:05:04', id:7},
        {name: 'doubled', lastmessage:'spa', isOnline: true, date: 'Wed Apr 03 2020 13:05:04', id:8},
        {name: 'doubled', lastmessage:'wjdgfgo dasjfi', isOnline: true, date: 'Wed Apr 03 2020 13:05:04', id:9},
        {name: 'doubled', lastmessage:'wwa', isOnline: true, date: 'Wed Apr 03 2020 13:05:04', id:10},
        {name: 'tripled', lastmessage:'wwgas', isOnline: true, date: 'Wed Apr 03 2020 13:05:04', id:11}
    ]
    const audioLink='https://notificationsounds.com/storage/sounds/file-sounds-1148-juntos.ogg';
    const [dialogspart, SetDialog] = useState(DialogItems);
    const [filtered, SetFilterDialog] = useState('');


    const searchDialog = (searchItem) => {     
        SetDialog(DialogItems.filter(el=> el.name.toLowerCase().includes(searchItem.toLowerCase()) || el.lastmessage.toLowerCase().includes(searchItem.toLowerCase())) );
        SetFilterDialog(searchItem)
    }


    // useEffect(() => {
    //     if (!items.length)
    // })

    return (
        <section className="Home">
            <Row>
            <Col xs={{span:24}, { order: 1 }} sm={8} className="searchPanel">
                <SearchPanel searchDialog={searchDialog} filtered={filtered}/>
            </Col>
            <Col xs={{span:24}, { order: 3 }} sm={16} className="chatProperties">
                <ChatProperties />
            </Col>            
                <Col xs={{span:24}, { order: 2 }} sm={8}  className="dialogues">
                    <Dialogs items={dialogspart}/>
                </Col>
                <Col xs={{span:24}, {offset:0}, { order: 4 }} sm={{span:16}, {offset:8}} className="chatContainer_media"> 
            <div className="chatContainer">
                <div className="chat">
                    <div className="messages" >
                <Message text={'testing tests 👌🏼'} 
                box={'sendbox'}
                avatar={'Udas'}
                date={"Sun Mar 28 2021 14:01:16"}
                checked={true}
                attachments = {
                    [
                        {
                            fileName: 'image1.jpg',
                            url: "https://source.unsplash.com/100x100/?random=4&nature,water",
                            id: 1
                        },
                        {
                            fileName: 'image2.jpg',
                            url: "https://source.unsplash.com/100x100/?random=5&nature,water",
                            id: 2
                        },
                        {
                            fileName: 'image3.jpg',
                            url: "https://source.unsplash.com/100x100/?random=6&nature,water",
                            id: 3
                        }
                    ]
                }
                />
                <Message 
                box={'inbox'}
                text={'testing tests testing tests testing tests testing tests testing tests testing tests asdasdasdasdasdas'}
                date={"Sun Mar 28 2021 14:01:16"}
                avatar={'Bdsa'}
                attachments= {
                    [
                        {
                            fileName: 'image1.jpg',
                            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
                            id: 4
                        },
                        {
                            fileName: 'image2.jpg',
                            url: "https://source.unsplash.com/100x100/?random=2&nature,water",
                            id: 5
                        },
                        {
                            fileName: 'image3.jpg',
                            url: "https://source.unsplash.com/100x100/?random=3&nature,water",
                            id: 6
                        },
                        {
                            fileName: 'image1.jpg',
                            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
                            id: 7
                        },
                        {
                            fileName: 'image2.jpg',
                            url: "https://source.unsplash.com/100x100/?random=2&nature,water",
                            id: 8
                        },
                        {
                            fileName: 'image3.jpg',
                            url: "https://source.unsplash.com/100x100/?random=3&nature,water",
                            id: 9
                        },
                        {
                            fileName: 'image1.jpg',
                            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
                            id: 10
                        },
                        {
                            fileName: 'image2.jpg',
                            url: "https://source.unsplash.com/100x100/?random=2&nature,water",
                            id: 11
                        },
                        {
                            fileName: 'image3.jpg',
                            url: "https://source.unsplash.com/100x100/?random=3&nature,water",
                            id: 12
                        }
                    ]
                }
                />
                <Message 
                box={'sendbox'}
                text={'testing tests testing tests testing tests testing tests testing tests testing tests testing tests testing tests testing tests testing tests testing tests testing tests testing tests'}
                date={"Sun Mar 28 2021 14:01:16"}
                avatar={'Fdfs'}
                attachments= {
                    [
                        {
                            fileName: 'image1.jpg',
                            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
                            id: 13
                        },
                        {
                            fileName: 'image2.jpg',
                            url: "https://source.unsplash.com/100x100/?random=2&nature,water",
                            id: 14
                        },
                        {
                            fileName: 'image3.jpg',
                            url: "https://source.unsplash.com/100x100/?random=3&nature,water",
                            id: 15
                        },
                        {
                            fileName: 'image1.jpg',
                            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
                            id: 16
                        },
                        {
                            fileName: 'image2.jpg',
                            url: "https://source.unsplash.com/100x100/?random=2&nature,water",
                            id: 17
                        },
                        {
                            fileName: 'image3.jpg',
                            url: "https://source.unsplash.com/100x100/?random=3&nature,water",
                            id: 18
                        },
                        {
                            fileName: 'image1.jpg',
                            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
                            id: 19
                        },
                        {
                            fileName: 'image2.jpg',
                            url: "https://source.unsplash.com/100x100/?random=2&nature,water",
                            id: 20
                        },
                        {
                            fileName: 'image3.jpg',
                            url: "https://source.unsplash.com/100x100/?random=3&nature,water",
                            id: 21
                        }
                    ]
                }
                />
                <Message 
                box={'sendbox'}
                date={"Sun Mar 28 2021 14:01:16"}
                avatar={'Grqw'}
                audioLink={audioLink}
                attachments= {
                    [
                        {
                            fileName: 'image1.jpg',
                            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
                            id: 1
                        }] }
                />
                <Message
                attachments= {
                    [
                        {
                            fileName: 'image1.jpg',
                            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
                            id: 13
                        }]}
                        box = {'sendbox'}
                        avatar = {'Sfasd'}
                        />
                <Message 
                box={'sendbox'}
                date={"Sun Mar 28 2021 14:01:16"}
                avatar={'Grqw'}
                isTyping={true}
                />
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

export default connect(
    ({ dialogs }) => dialogs,
    dialogsActions,
  )(Home);