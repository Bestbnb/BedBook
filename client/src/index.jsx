import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar.jsx';
import Booking from './components/Booking.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookedDates: null,
      price: null,
      ratings: null,
      cleaningFee: null,
      serviceFee: null,
      total: null,
      bonusInfo: null,
      adults: 0,
      children: 0,
      infants: 0
    };

  }


  render() {
    return (
      <div>
        <div>
          <Calendar state={this.state}/>
        </div>
        
        <div>
          <Booking state={this.state}/>
        </div>

      </div>
    )
  };
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
