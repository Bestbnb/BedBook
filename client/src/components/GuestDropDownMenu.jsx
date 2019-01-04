import React from 'react';

const GuestDropDownMenu = (props) => (
  <div>
    <div className='guest-drop-down-button' >
      <div className="drop-down">
        <div style={{marginTop: '16px', marginBottom: '16px'}}>
          <div style={{marginTop: '16px', marginBottom: '16px'}}>
            <div className="no-padding">
              <div>
                <div className="guest-row">
                  <div className="guest-label">
                    <div className="guest-label2">
                      <div id="StepIncrementerRow-title-GuestCountFilter-GuestPicker-p3-book_it-adults">
                        <div className="guest-label-font">Adults</div>
                      </div> 
                    </div>
                  </div>
                  <div className="guest-controller">
                    <div className="guest-controller-format">
                      <div className="guest-minus">
                        <button type="button" className="guest-button-format" onClick={props.decreaseByOne}>
                          <span className="guest-minus-format">
                            <svg viewBox="0 0 24 24" role="img" aria-label="subtract, 2 adults" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                              <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="guest-num-format">
                        <div className="guest-label-font">{props.state.adults}</div>
                      </div>
                      <div className="guest-plus-format">
                        <button type="button" className="guest-button-format" aria-busy="false" onClick={props.increaseByOne}>
                          <span className="guest-minus-format">
                            <svg viewBox="0 0 24 24" role="img" aria-label="add, 2 adults" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                              <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                              <rect height="12" rx="1" width="2" x="11" y="6"></rect>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop: '24px', marginBottom: '24px'}}>
            <div className="no-padding">
              <div role="group" aria-labelledby="StepIncrementerRow-title-GuestCountFilter-GuestPicker-p3-book_it-children">
                <div className="guest-row">
                  <div className="guest-label">
                    <div className="guest-label2">
                      <div id="StepIncrementerRow-title-GuestCountFilter-GuestPicker-p3-book_it-children">
                        <div className="guest-label-font">Children</div>
                      </div>
                      <div id="StepIncrementerRow-subtitle-GuestCountFilter-GuestPicker-p3-book_it-children" className="_1pjh0qr">
                        <div className="subtext-format">Ages 2–12</div>
                      </div>
                    </div>
                  </div>
                  <div className="guest-controller">
                    <div className="guest-controller-format">
                      <div className="guest-minus">
                        <button type="button" className="guest-button-format" aria-busy="false" onClick={props.decreaseByOneC}>
                          <span className="guest-minus-format">
                            <svg viewBox="0 0 24 24" role="img" aria-label="subtract, 1 child" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                              <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div aria-hidden="true" className="guest-num-format">
                        <div className="guest-label-font">{props.state.children}</div>
                      </div>
                      <div className="guest-plus-format">
                        <button type="button" className="guest-button-format" aria-busy="false" onClick={props.increaseByOneC}>
                          <span className="guest-minus-format">
                            <svg viewBox="0 0 24 24" role="img" aria-label="add, 1 child" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                              <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                              <rect height="12" rx="1" width="2" x="11" y="6"></rect>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop: '24px', marginBottom: '24px'}}>
            <div className="no-padding">
              <div role="group" aria-labelledby="StepIncrementerRow-title-GuestCountFilter-GuestPicker-p3-book_it-infants">
                <div className="guest-row">
                  <div className="guest-label">
                    <div className="guest-label2">
                      <div id="StepIncrementerRow-title-GuestCountFilter-GuestPicker-p3-book_it-infants">
                        <div className="guest-label-font">Infants</div>
                      </div>
                      <div id="StepIncrementerRow-subtitle-GuestCountFilter-GuestPicker-p3-book_it-infants" className="_1pjh0qr">
                        <div className="subtext-format">Under 2</div>
                      </div>
                    </div>
                  </div>
                  <div className="guest-controller">
                    <div className="guest-controller-format">
                      <div className="guest-minus">
                        <button type="button" disabled="" className="guest-button-format" aria-busy="false" onClick={props.decreaseByOneI}>
                          <span className="guest-minus-format">
                            <svg viewBox="0 0 24 24" role="img" aria-label="subtract, 0 infants" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                              <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div aria-hidden="true" className="guest-num-format">
                        <div className="guest-label-font">{props.state.infants}</div>
                      </div>
                      <div className="guest-plus-format">
                        <button type="button" className="guest-button-format" aria-busy="false" onClick={props.increaseByOneI}>
                          <span className="guest-minus-format">
                            <svg viewBox="0 0 24 24" role="img" aria-label="add, 0 infants" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                              <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                              <rect height="12" rx="1" width="2" x="11" y="6"></rect>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{marginBottom: '16px'}}>
              <div className="subtext-format">4 guests maximum. Infants don’t count toward the number of guests.</div>
            </div>
            <div className="close-button">
              <div className="close-button-format">
            </div>
            <div className="close-button-alignment">
              <div className="guest-label-font">
                <button type="button" className="close-style" aria-busy="false" onClick={props.onClickHandler}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default GuestDropDownMenu;