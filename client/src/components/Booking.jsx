import React from 'react';
import GuestDropDownMenu from './GuestDropDownMenu.jsx';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';

const Booking = (props) => (
  <div className='booking'>
    <div className='description'>
    [temp] $127 per night
    </div>
    <div className='reviews'>[temp]*****</div>
    <div className='line'>----------</div>
    <form>
      <Dates /> 
      <Guests />
    </form>

  </div>  
);

export default Booking;

