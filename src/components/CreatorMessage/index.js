import React, {useState} from 'react'
import { UploadField } from '@navjobs/upload'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import {LinkOutlined, SmileOutlined, AudioOutlined} from '@ant-design/icons'

import './CreatorMessage.scss'
import classNames from 'classnames'

const CreatorMessage = () => {
    const [emojiPicker, SetEmojiPicker] = useState(false)
    
    return(
        <div className="message_input"> 
        <SmileOutlined className="smile" onClick={() => SetEmojiPicker(emojiPicker=> {return !emojiPicker})} />
        <div className={classNames( "emojiPickerBlock", {invisible:!emojiPicker, visible:emojiPicker})}>
        <Picker skin='5' set='google' title='Pick your emoji…' style={{ position: 'absolute', bottom: '20px', right: '20px' }}
        i18n={{ search: 'search', categories: { search: 'Search', recent: 'Recent Emojis' } }}/>
        </div>


        <input/> 
        <span>
            <UploadField
            onFiles={files => console.log(files)}
            containerProps={{
            className: 'resume_import'
            }}
            uploadProps={{
            accept: '.jpg, .jpeg, .png, .gif, .bmp',
            multiple: 'multiple'
            }}
        >
            <div>
            <LinkOutlined className="attach"/>
            </div>
        </UploadField>

            <AudioOutlined className="audio_attach"/>
        </span>
     </div>
    )
}

export default CreatorMessage