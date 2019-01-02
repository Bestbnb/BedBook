import React from 'react';

const Dates = (props) => (
  <div>
    <label className='label-entry'>
      <span className='label'>Dates</span>
    </label>

    <div>
      <input value={`${props.state.checkIn !== null ? props.state.checkIn.toString() : ''}`} placeholder='Check in'></input>
    </div>
    <div>[temp] arrow</div>
    <div>
      <input value={`${props.state.checkOut !== null ? props.state.checkOut.toString() : ''}`} placeholder='Check out'></input>
    </div>
  </div>
);


export default Dates;