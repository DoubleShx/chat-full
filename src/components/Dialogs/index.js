import React, { Fragment } from 'react'
import DialogItem from '../DialogItem';
import orderBy from 'lodash/orderBy'


const Dialogs = ({items, SelectDialog}) => {
  
    return(
        <Fragment> 
            { orderBy(items, ['date'], ['asc']).map((item) => {
                return(
                    <DialogItem name={item.name} lastmessage={item.lastmessage} isOnline={item.isOnline} date={item.date} key={item.id} id={item.id}  SelectDialog={SelectDialog}/>)
            })}
        </Fragment>
    )
}
export default Dialogs;