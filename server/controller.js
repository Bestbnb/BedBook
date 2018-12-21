const db = require('./db/dbModel');

const createBooking = (req, res, next) => {
  db.Reservations.create({
    dateCheckIn: req.query.dateCheckIn, // working for postman 
    dateCheckOut: req.query.dateCheckOut
  })
  .then(() => {
    console.log('SUCCESS: Reservation booked!');
    res.status(201);
    res.send('Reservation booked!');
  })
  .catch(err => {
    console.log('FAILED: Reservation failed!');
    res.status(500);
    res.send(err);
  });
};

const createBnb = (req, res, next) => {
  db.BnbData.create({
    minStay: req.body.minStay,
    lastUpdate: req.body.lastUpdate,
    costPerNight: req.body.costPerNight,
    ratings: req.body.ratings,
    cleaningFee: req.body.cleaningFee,
    serviceFee: req.body.serviceFee,
    bonusInfo: req.body.bonusInfo
  })
  .then(() => {
    console.log('SUCCESS: Bnb Created!');
    res.status(201);
    res.send('SUCCESS: Bnb Created!');
  })
  .catch(err => {
    console.log('FAILED: Bnb not created!');
    res.status(500);
    res.send(err);
  });
};

const findAllBooking = (req, res, next) => {
  db.Reservations.findAll()
    .then(bookings => {
      console.log('SUCCESS: got all bookings');
      res.status(200);
      res.send(bookings);
    })
    .catch(err => {
      console.log('FAILED: getting all bookings');
      res.status(500);
      res.send(err);
    });
};

const findAllBnb = (req, res, next) => {
  db.BnbData.findAll()
    .then(data => {
      console.log('SUCCESS: got all bookings');
      res.status(200);
      res.send(data);
    })
    .catch(err => {
      console.log('FAILED: getting all bookings');
      res.status(500);
      res.send(err);
    });
};

module.exports = {
  createBooking,
  createBnb,
  findAllBooking,
  findAllBnb
};