import React from 'react';

const Dates = (props) => (
  <div>
    <label className='label-entry'>
      <span className='label'>Dates</span>
    </label>
    <div className='font600'>
      <div className='date-input'>
        <div className='date-entry'>
          <div className='date-cell'>
            <input type='text' className='input1' value={`${props.state.checkIn !== null ? props.state.checkIn.toString() : ''}`} placeholder='Check in'></input>
          </div>
          <div style={{display: 'inline-block', verticalAlign: 'middle'}}>[temp] arrow</div>
          <div className='date-cell'>
            <input type='text' className='input1' value={`${props.state.checkOut !== null ? props.state.checkIn.toString() : ''}`} placeholder='Check out'></input>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default Dates;