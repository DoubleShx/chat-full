import React from 'react'
import Message from '../../components/Message'

import './Home.scss'

const Home = () => {
    return (
        <section className="Home">
            <div className="chatContainer">
            <Message text={'testing tests 👌🏼'} 
            box={'sendbox'}
            avatar={'U'}
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
            avatar={'B'}
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
            avatar={'F'}
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
            text={'testing tests'}
            date={"Sun Mar 28 2021 14:01:16"}
            avatar={'G'}
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
                    avatar = {'S'}
                    />
            </div>
        </section>
    )
}

export default Home;