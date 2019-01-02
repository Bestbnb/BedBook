const Sequelize = require('sequelize');
const connection = new Sequelize('TEST_cal_book', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
  }
);

connection.authenticate()
  .then(() => console.log('Connected to TEST_cal_book database'))
  .catch(err => console.error(err));

// ---------------------------------------------------------------
//                           M o d e l
// ---------------------------------------------------------------
const BnbData = connection.define('bnbData', {
  minStay: Sequelize.INTEGER,
  lastUpdate: Sequelize.DATE,
  costPerNight: Sequelize.INTEGER,
  ratings: Sequelize.INTEGER,
  cleaningFee: Sequelize.INTEGER,
  serviceFee: Sequelize.INTEGER,
  bonusInfo: Sequelize.STRING
});

const Reservations = connection.define('reservation', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  dateCheckIn: Sequelize.DATE,
  dateCheckOut: Sequelize.DATE
});


// Reservations.belongsTo(BnbData);
// BnbData.belongsTo(Reservations);
Reservations.sync(
  // {force: true}
);

BnbData.sync(
  // {force: true}
);


module.exports = {
  Reservations,
  BnbData
};