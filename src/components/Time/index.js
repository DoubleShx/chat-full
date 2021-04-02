import React from 'react'
import {format, formatDistanceToNow, intervalToDuration} from 'date-fns'
import ruLocale from 'date-fns/locale/ru'


const Time = ({date, formatOfTime='distance'}) => {

    const distanceTime = (date) => {
        if ((Date.now() - Date.parse(date))/24/60/60/1000 < 0.95) {
            return true
        } return false
    }
    return (
        <p className="message_date">
            { formatOfTime == 'distance' ?
             distanceTime(date) 
            ? formatDistanceToNow(new Date(date), {addSuffix: true, locale: ruLocale})
            : format(new Date(date), "d LLL") 
            : formatOfTime === 'minute:seconds' ? format(new Date(date), 'mm:ss') 
            : null
            }
            </p>
    )
}
export default Time;