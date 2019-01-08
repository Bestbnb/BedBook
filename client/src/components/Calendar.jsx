import React from 'react';
import dateFns from 'date-fns';
import axios from 'axios';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date(),
      currentMonth: new Date(),
      currentMonth2: new Date(),
      checkIn: new Date(),
      checkOut: new Date(),
      minStay: 1,
      updatedWhen: 4,
      bookedDates: null,
      bookingArr: null
    };

    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.renderCells = this.renderCells.bind(this);
    this.renderCells2 = this.renderCells2.bind(this);
  }

  componentDidMount() {
    this.getReservations();
    this.getAllBookedDates();

    this.setState({
      currentMonth2: dateFns.addMonths(this.state.currentMonth, 1)
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.currentMonth !== this.state.currentMonth) {
      this.setState({
        currentMonth2: dateFns.addMonths(this.state.currentMonth, 1)
      });
      // this.getReservations();
    }
    if (JSON.stringify(prevState.bookingArr) !== JSON.stringify(this.state.bookingArr)) {
      this.getAllBookedDates();
    }
  };

  // GET - reservations
  getReservations() {
    axios.get('/booking')
      .then(reservations => {
        this.setState({
          bookedDates: reservations.data
        });
      })
      .catch(err => console.log(err));
  }

  getAllBookedDates() {
    let bookingArr = [];
    if (this.state.bookedDates !== null) {
      this.state.bookedDates.forEach(booking => {
        let checkIn = booking.dateCheckIn;
        let checkOut = booking.dateCheckOut;
        let difference = dateFns.differenceInCalendarDays(checkOut, checkIn);
        for (let i = 0; i <= difference; i++) {
          bookingArr.push(this.parseDate(dateFns.addDays(checkIn, i).toString()));
        }
      });
      this.setState({
        bookingArr: bookingArr
      });
    }
  }

  parseDate(date) {
    let dateArr = date.split(' ');
    let output = [];
    for (let i = 0; i < 4; i++) {
      output.push(dateArr[i]);
    }
    return output.join(' ');
  }

  // controller //
  
  onDateClick(day) {
    this.setState({
      selectedDate: day
    });
    this.props.selectDateClick(day);
  };

  nextMonth() {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth() {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };




  // view //

  renderHeader() {
    const dateFormat = 'MMMM YYYY';
    return (
      <div className='month-label'>
        <p>
          <strong>{dateFns.format(this.state.currentMonth, dateFormat)}</strong>
        </p>
      </div>
    );
  }

  renderHeader2() {
    const dateFormat = 'MMMM YYYY';
    return (
      <div className='month-label'>
        <p>
          <strong>{dateFns.format(this.state.currentMonth2, dateFormat)}</strong>
        </p>
      </div>
    );
  }
  
  renderDays() {
    const dateFormat = 'dd';
    const days = [];
    let startDate = dateFns.startOfWeek(this.state.currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className='day-label' key={i}>
          <small>{dateFns.format(dateFns.addDays(startDate, i), dateFormat)}</small>
        </div>
      );
    }
    return <div className='row'>{days}</div>;
  }

  renderDays2() {
    const dateFormat = 'dd';
    const days2 = [];
    let startDate2 = dateFns.startOfWeek(this.state.currentMonth2);
    for (let i = 0; i < 7; i++) {
      days2.push(
        <div className='day-label' key={i}>
          <small>{dateFns.format(dateFns.addDays(startDate2, i), dateFormat)}</small>
        </div>
      );
    }
    return <div className='row'>{days2}</div>;
  }

  renderCells() {
    if (this.state.bookingArr === null) {
      this.getAllBookedDates(this.state.bookingArr);
    }
    const { currentMonth, selectedDate, bookingArr } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = 'D';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';
    
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        if (dateFns.isSameMonth(day, monthStart)) {
          formattedDate = dateFns.format(day, dateFormat);
          const cloneDay = day;
          let availability = 'unavailable';
          if (dateFns.isBefore(day, this.state.today)) {
            availability = 'unavailable';
          } else if (bookingArr !== null) {
            availability = (bookingArr.includes(this.parseDate(day.toString())) ? 'unavailable' : 'available');
          }
          if (availability === 'unavailable') {
            days.push(
              <div className={`${availability} cell ${dateFns.isSameDay(day, selectedDate) ? 'selected' : ''}`}
                key={day}
              >
                <div className='number-template'> 
                  <div className='gray-num'>{formattedDate}</div>
                </div>
              </div>
            );
          } else {
            let isSelected = 'number';
            let isSelectedCell = '';

            if (this.props.state.selectedArr !== null) {
              let arr = this.props.state.selectedArr;
              isSelected = (arr.includes(day.toString()) ? 'selected-num' : 'number');
              isSelectedCell = (arr.includes(day.toString()) ? 'selected' : '');
            }

            days.push(
              <div
                className={`available cell ${isSelectedCell}`}
                key={day}
                onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
              >
                <div className='number-template'> 
                  <div className={`${isSelected}`}>{formattedDate}</div>
                </div>
              </div>
            );
          }
        } else {
          days.push(<td key={day} className='col cell'></td>)
        }
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <tr className='row' key={day}>
          {days}
        </tr>
      );
      days = [];
    }
    return <div><table className='body'>{rows}</table></div>;
  }

  renderCells2() {
    if (this.state.bookingArr === null) {
      this.getAllBookedDates(this.state.bookingArr);
    }
    const { currentMonth2, selectedDate, bookingArr } = this.state;
    const monthStart2 = dateFns.startOfMonth(currentMonth2);
    const monthEnd = dateFns.endOfMonth(monthStart2);
    const startDate = dateFns.startOfWeek(monthStart2);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = 'D';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';
    
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        if (dateFns.isSameMonth(day, monthStart2)) {
          formattedDate = dateFns.format(day, dateFormat);
          const cloneDay = day;
          let availability = 'unavailable';
          if (dateFns.isBefore(day, this.state.today)) {
            availability = 'unavailable';
          } else if (bookingArr !== null) {
            availability = (bookingArr.includes(this.parseDate(day.toString())) ? 'unavailable' : 'available');
          }
          if (availability === 'unavailable') {
            days.push(
              <div
                className={`${availability} cell ${dateFns.isSameDay(day, selectedDate) ? 'selected' : ''}`}
                key={day}
              >
                <div className='number-template'> 
                  <div className='gray-num'>{formattedDate}</div>
                </div>
              </div>
            );
          } else {
            let isSelected = 'number';
            let isSelectedCell = '';
            if (this.props.state.selectedArr !== null) {
              let arr = this.props.state.selectedArr;
              isSelected = (arr.includes(day.toString()) ? 'selected-num' : 'number');
              isSelectedCell = (arr.includes(day.toString()) ? 'selected' : '');
            }

            days.push(
              <div
                className={`${availability} cell ${isSelectedCell}`}
                key={day}
                onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
              >
                <div className='number-template'> 
                  <div className={`${isSelected}`}>{formattedDate}</div>
                </div>
              </div>
            );
          }
        } else {
          days.push(<td key={day} className='col cell'></td>)
        }
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <tr className='row' key={day}>
          {days}
        </tr>
      );
      days = [];
    }
    return <div><table className='body'>{rows}</table></div>;
  }

  render() {
    return (
      <div className='calendar'>
        <div className='calendar-padding description'>
          <h2>
            <div className='line availability'>
              Availability
            </div>
          </h2>
        </div>
        <div className='calendar-padding description'>
          {this.state.minStay} night minimum stay - Updated {this.state.updatedWhen} days ago
        </div>
        <div className='cal-container'>

          <div className='prevmonth'>
            <svg onClick={this.prevMonth} focusable='false' viewBox='0 0 1000 1000'><path d='M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z'></path></svg>
          </div>
          <div className='nextmonth'>
            <svg onClick={this.nextMonth} focusable='false' viewBox='0 0 1000 1000'><path d='M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z'></path></svg>
          </div>

          <div className='calendar-module'>
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
          </div>
          <div className='calendar-module'>
            {this.renderHeader2()}
            {this.renderDays2()}
            {this.renderCells2()}
          </div>
        </div>
             
      </div>
    );
  }
}

export default Calendar;