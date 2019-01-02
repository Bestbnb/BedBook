import React from 'react';
import GuestDropDownMenu from './GuestDropDownMenu.jsx';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';

const Booking = (props) => (
  <div id='bookingModule' className='booking'>
    <div className='description'>
    [temp] $127 per night
    </div>
    <div className='reviews'>[temp]*****</div>
    <div className='line'>----------</div>
    <form>
      <div>
        <Dates state={props.state}/>
        <Guests state={props.state}/>
      </div>
    </form>
    <div style={{'marginBottom': '8px'}}>
      <div>
        <span>
          [temp] $75 per night
        </span>
      </div>

      <div style={{'marginBottom': '8px', 'margonTop': '8px'}}>
        <div className="divider"></div>
      </div>

    </div>
  </div>  
);

export default Booking;

