import React from 'react';

const Calendar = () => (
  <body className='Calendar Module'>
    <div className='Availability'>Availability</div>
    <div className='minStay'>'(place holder text) 1 min night stay - updated 1 month ago</div>
    <div className='Clear dates'>Clear dates</div>

    <div class='month'> 
      <ul>
        <li class='prev'>PREV</li>
        <li class='next'>NEXT</li>
        <li>December<br></br><span>2018</span></li>
      </ul>
    </div>

    <ul class='weekdays'>
      <li>Mo</li>
      <li>Tu</li>
      <li>We</li>
      <li>Th</li>
      <li>Fr</li>
      <li>Sa</li>
      <li>Su</li>
    </ul>

    <ul class='days'> 
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li><span className='active'>10</span></li>
      <li><span className='active'>11</span></li>
      <li><span className='active'>12</span></li>
      <li><span className='active'>13</span></li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
    </ul> 

  </body>
);



export default Calendar;