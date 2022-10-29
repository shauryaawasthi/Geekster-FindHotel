import React from 'react'
import { Button } from '../Button'
import { useState } from 'react';
import GuestRoomDialog from '../GuestRoomDialog';
import { pushState } from './pushState';
import "./MainScreen.css"



export default function MainScreen() {

 

  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  
  return (
    <div className='Main-Div'>
        <div className='main-wrap'>
            <h1>FIND<span className='hotel-title'>HOTEL</span></h1>
            <div className='text-wrap'>
                <p>Find the <span className='perfect'>Perfect</span></p>
                <p className='text-wrap-h2'>deals,always.</p>
            </div>
            <div className='work-wrap'>
            {/* <h3>Calender</h3>
            <h3>Search Input</h3> */}
            <Button onClick={openDialog} className="main-button">Select Rooms</Button>
            <GuestRoomDialog className="try" onClose={closeDialog} open={open} onSearch={pushState}/>
            </div>
        </div>
      
    </div>
  )
}
