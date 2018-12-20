const Sequelize = require('sequelize');
const connection = new Sequelize('Bestbnb_cal_book', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
  }
);

connection.authenticate()
  .then(() => console.log('Connected to moviedb database'))
  .catch(err => console.error(err));

// ---------------------------------------------------------------
//                           M o d e l
// ---------------------------------------------------------------

const Reservations = connection.define('reservation', {
  dateBooked: Sequelize.DATE
});

const BnbData = connection.define('bnbData', {
  minStay: Sequelize.INTEGER,
  lastUpdate: Sequelize.INTEGER,
  costPerNight: Sequelize.INTEGER,
  ratings: Sequelize.INTEGER,
  cleaningFee: Sequelize.INTEGER,
  serviceFee: Sequelize.INTEGER,
  bonusInfo: Sequelize.STRING
});

// BnbData.belongsTo(Reservations);

Reservations.sync();
BnbData.sync();


module.exports = {
  Reservations,
  BnbData
};