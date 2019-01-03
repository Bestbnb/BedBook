import React from 'react';
import dateFns from 'date-fns';

const Dates = (props) => (
  <div style={{marginTop:'16px', marginBottom:'8px'}}>
    <div>
      <label className='label-entry'>
        <span className='label'>Dates</span>
      </label>
      <div className='font600'>
        <div className='date-input'>
          <div className='date-entry'>
            <div className='date-cell'>
              <input type='text' className='input1' value={`${props.state.checkIn !== null ? dateFns.format(props.state.checkIn, 'MM/DD/YYYY').toString() : ''}`} placeholder='Check in'></input>
            </div>
            <div style={{display: 'inline-block', verticalAlign: 'middle', transform: 'translate(-50%, 27%)'}}>
              <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{height:'24px', width:'24px', display:'block', fill:'currentcolor'}}>
                <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd"></path>
              </svg>
            </div>
            <div className='date-cell'>
              <input type='text' className='input1' value={`${props.state.checkOut !== null ? dateFns.format(props.state.checkOut, 'MM/DD/YYYY').toString() : ''}`} placeholder='Check out'></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default Dates;