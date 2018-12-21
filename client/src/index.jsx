import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookedDates: null
    };

  }


numOfDays(mm, yyyy) {
  let daysOfMonth;
  if (mm === 4 || mm === 6 || mm === 9 || mm === 11) {
    daysOfMonth = 30;
  } else if (mm === 2) {
    if (yyyy/4 - parseInt(yyyy/4) !== 0) {
      daysOfMonth = 28;
    } else if (yyyy/100 - parseInt(yyyy/100) !== 0) {
      daysofmonth = 29
    } else if (yyyy/400 - parseInt(yyyy/400) !== 0) {
      daysOfMonth = 28;
    } else {
      daysOfMonth = 29;
    }
  } else {
  daysOfMonth = 31;
  }
  
  return daysOfMonth;
}


  render() {
    return (
      <div>
        <Calendar />
      </div>
    )
  };
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
