import React from 'react'
import {format, formatDistanceToNow} from 'date-fns'
import ruLocale from 'date-fns/locale/ru'


const Time = ({date, formatOfTime=false}) => {

    const distanceTime = (date) => {
        if ((Date.now() - Date.parse(date))/24/60/60/1000 < 0.95) {
            return true
        } return false
    }
   const formatBoolean = (formatOfTime == 'distance')
    return (
        <p className="message_date">
            { distanceTime(date) 
            ? formatDistanceToNow(new Date(date), {addSuffix: true, locale: ruLocale})
            : format(new Date(date), "d LLL")
            }
            </p>
    )
}
export default Time;