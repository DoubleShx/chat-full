import React, { Fragment } from 'react'
import DialogItem from '../DialogItem';
import orderBy from 'lodash/orderBy'
import { Result, Spin } from 'antd';

import './Dialogs.scss'


const Dialogs = ({items, SelectDialog, spiner}) => {
    return(
        <Fragment> 
            
            {  spiner ? <Spin className="spiner"/>
              : items
              ? !items.includes('Error') ?
                  orderBy(items, ['date'], ['asc']).map((item) => {
                    return(
                        <DialogItem name={item.name} lastmessage={item.lastmessage} isOnline={item.isOnline} date={item.date} key={item.id} id={item.id}  SelectDialog={SelectDialog}/>)
                    }) : <Result
                    status="error"
                    title={items}/> : <h1>dhjsajfasjfjasfjasjhfasfasjhfasjhcxzhucsauh</h1>
            }  
        </Fragment>
    )
}
export default Dialogs;