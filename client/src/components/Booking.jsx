import React from 'react';
import GuestDropDownMenu from './GuestDropDownMenu.jsx';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';

const Booking = (props) => (
  <div id='bookingModule' className='booking'>
    <div className='booking booking-margin' style={{marginTop:'32px', marginBottom:'24px', position:'fixed', top:'75px'}}>
      <div className='booking-padding'>
        <div style={{marginTop: '16px', marginBottom: '24px'}}>
          <div className='description'>
          [temp] $127 per night
          </div>
          <div className='reviews'>[temp]*****</div>
          <div style={{marginBottom: '8px', marginTop: '8px'}}>
            <div className='divider'></div>
          </div>
          
          <form>
            <div>
              <Dates state={props.state}/>
              <Guests state={props.state}/>
            </div>
              
            <div style={{marginBottom: '8px'}}>
              <div style={{display: 'table', width: '100%', borderSpacing: '0px'}}>
                <div style={{display: 'table-cell', width: '100%', verticalAlign: 'middle'}}>
                  <span>
                    [temp] $75 per night
                  </span>
                </div>
              </div>

              <div style={{marginBottom: '8px', marginTop: '8px'}}>
                <div className='divider'></div>
              </div>

              <div style={{display: 'table-cell', width: '100%', verticalAlign: 'middle'}}>
                <span>
                  [temp] Cleaning Fee
                </span>

                <div className='questionButton'>
                  <div style={{position: 'relative', display: 'block'}}>
                    <button style={{padding: '0px', margin: '0px'}}>
                      <svg viewBox='0 0 24 24' role='img' aria-label='Learn more' focusable='false' style={{height: '15px', width: '15px', display: 'block', fill: 'rgb(72, 72, 72)'}}>
                        <path d='m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z' fillRule='evenodd'></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div style={{marginBottom: '8px', marginTop: '8px'}}>
                  <div className='divider'></div>
                </div>

                <div style={{display: 'table-cell', width: '100%', verticalAlign: 'middle'}}>
                  <span>
                    [temp] Service Fee
                  </span>

                  <div className='questionButton'>
                    <div style={{position: 'relative', display: 'block'}}>
                      <button style={{padding: '0px', margin: '0px'}}>
                        <svg viewBox='0 0 24 24' role='img' aria-label='Learn more' focusable='false' style={{height: '15px', width: '15px', display: 'block', fill: 'rgb(72, 72, 72)'}}>
                          <path d='m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z' fillRule='evenodd'></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div style={{marginBottom: '8px', marginTop: '8px'}}>
                    <div className='divider'></div>
                  </div>

                  <div style={{display: 'table-cell', width: '100%', verticalAlign: 'middle'}}>
                    <span>
                      Total
                    </span>
                  </div>

                </div>
              </div> 
            </div>
            <div style={{marginTop: '24px'}}>
              <button type='submit' className='submit-button'>
                <span>
                  <div className='button-text'>Book</div>
                </span>
              </button>
            </div>

            <div style={{marginTop: '8px'}}>
              <div style={{textAlign: 'center'}}>
                <span className='booking-desc'>You won’t be charged yet</span>
              </div>
            </div>

            <div style={{marginBottom: '24px', marginTop: '24px'}}>
              <div className='divider'></div>
            </div>

            <div style={{minHeight:'46px'}}>
              <div className='diamond-icon' style={{backgroundImage:'url("https://a0.muscache.com/airbnb/static/page3/icon-uc-diamond-86ef3d6403e5b6747d1e3a97ed840b6d.gif")'}}>
                <div style={{display: 'table-cell', width: '100%', verticalAlign: 'middle'}}>
                  <span>
                    [temp] This is a rare find!
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div> 
      </div> 
    </div> 
  </div>  
);

export default Booking;

