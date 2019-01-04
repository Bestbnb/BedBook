import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar.jsx';
import Booking from './components/Booking.jsx';
import dateFns from 'date-fns';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: null,
      ratings: null,
      cleaningFee: null,
      serviceFee: null,
      total: null,
      bonusInfo: null,
      adults: 1,
      children: 0,
      infants: 0,
      checkIn: null,
      checkOut: null,
      selectedArr: [],
      bookingCheckIn: null,
      bookingCheckOut: null,
      isCostOpen: false,
      isCleaningOpen: false,
      isServiceOpen: false
    };
  }

  onClickHandlerCost(e) {
    e.preventDefault();
    this.setState(currentState => ({
      isCostOpen: !currentState.isCostOpen,
      isCleaningOpen: false,
      isServiceOpen: false
    }));
    console.log('COST', this.state.isCostOpen);
  }

  onClickHandlerCleaning(e) {
    e.preventDefault();
    this.setState(currentState => ({
      isCostOpen: false,
      isCleaningOpen: !currentState.isCleaningOpen,
      isServiceOpen: false
    }));
    console.log('CLEANING', this.state.isCleaningOpen);
  }

  onClickHandlerService(e) {
    e.preventDefault();
    this.setState(currentState => ({
      isCostOpen: false,
      isCleaningOpen: false,
      isServiceOpen: !currentState.isServiceOpen
    }));
    console.log('SERVICE', this.state.isServiceOpen);
  }

  updateAdults(num) {
    if (this.state.adults + num >= 1) {
      this.setState({
        adults: this.state.adults + num
      })
    }
  }

  updateChildren(num) {
    if (this.state.children + num >= 0) {
      this.setState({
        children: this.state.children + num
      })
    }
  }

  updateInfants(num) {
    if (this.state.infants + num >= 0) {
      this.setState({
        infants: this.state.infants + num
      })
    }
  }

  selectDateClick(day) {
    if (this.state.checkIn === null) {
      let dayStr = day.toString();
      this.setState({
        checkIn: day,
        selectedArr: [dayStr]
      });
      console.log('set checkIn via select');
    } else if (this.state.checkOut === null) {
      this.setState({
        checkOut: day
      }, () => {
        this.calculateRangeSelected()
      });
      console.log('set checkOUT via select');
    } else {
      let dayStr = day.toString();
      this.setState({
        checkIn: day,
        checkOut: null,
        selectedArr: [dayStr]
      })
      console.log('reset check and selected checkIn');
    }
  }

  calculateRangeSelected() {
    let difference = dateFns.differenceInCalendarDays(this.state.checkOut, this.state.checkIn);
    let arr;
    for (let i = 0; i <= difference; i++) {
      let selectedDate = dateFns.addDays(this.state.checkIn, i).toString();
      arr = this.state.selectedArr;
      arr.push(selectedDate);
    }
    this.setState({
      selectedArr: arr
    });
  }


  render() {
    return (
      <main style={{position:'absolute', display: 'block', width: '100%'}}>
        <div className='room'>
          <div style={{marginTop:'0px', marginBottom:'0px', marginLeft:'0px', marginRight:'0px'}}>
            <div style={{marginTop:'-51px', paddingTop:'51px'}}></div>
              <Calendar state={this.state} selectDateClick={this.selectDateClick.bind(this)} calculateRangeSelected={this.calculateRangeSelected.bind(this)}/>
            
              <br></br>
              <br></br>

              <Booking state={this.state} updateAdults={this.updateAdults.bind(this)} updateChildren={this.updateChildren.bind(this)} updateInfants={this.updateInfants.bind(this)} onClickHandlerCost={this.onClickHandlerCost.bind(this)} onClickHandlerCleaning={this.onClickHandlerCleaning.bind(this)} onClickHandlerService={this.onClickHandlerService.bind(this)}/>

          </div>
        </div>
      </main>
    )
  };
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
