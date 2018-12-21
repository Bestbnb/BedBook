const faker = require('faker');
const puppeteer = require('puppeteer');
const Sequelize = require('sequelize');
const pageURL = 'http://127.0.0.1:1337/';

// ---------------------------------------------------------------
// Testing DB Setup
// ---------------------------------------------------------------
const connection = new Sequelize('TEST_cal_book', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
  }
);

connection.authenticate()
  .then(() => console.log('Connected to TEST_cal_book database'))
  .catch(err => console.error(err));

let BnbData = connection.define('bnbData', {
  minStay: Sequelize.INTEGER,
  lastUpdate: Sequelize.DATE,
  costPerNight: Sequelize.INTEGER,
  ratings: Sequelize.INTEGER,
  cleaningFee: Sequelize.INTEGER,
  serviceFee: Sequelize.INTEGER,
  bonusInfo: Sequelize.STRING
});

let Reservations = connection.define('reservation', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  dateBooked: Sequelize.DATE
});

Reservations.belongsTo(BnbData);

Reservations.sync();
BnbData.sync();

Reservations.destroy({
  where: {},
  truncate: true
})

BnbData.destroy({
  where: {},
  truncate: true
})
// ---------------------------------------------------------------
// Faker Setup
// ---------------------------------------------------------------

for (let i = 0; i < 100; i++) {
  let fakeBnbData = {
    minStay: faker.random.number(10),
    lastUpdate: faker.date.past(1),
    costPerNight: faker.commerce.price(10,1500,0),
    ratings: faker.random.number(5),
    cleaningFee: faker.commerce.price(60,150,0),
    serviceFee: faker.commerce.price(10,100,0),
    bonusInfo: faker.company.bs()
  };
  BnbData.create(fakeBnbData);
}


// determine randomizing groups of clusters of dates (e.g. booking a week)

for (let i = 0; i < 100; i++) {
  let fakeReservation = {
    dateBooked: faker.date.future(0, '2020-01-01')
  };
  Reservations.create(fakeReservation);
}

// ---------------------------------------------------------------
// Puppeteer Setup
// ---------------------------------------------------------------
let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

// ---------------------------------------------------------------
// Tests
// ---------------------------------------------------------------
describe('database functionality', () => {
  beforeEach(async () => {
   page.goto(pageURL, {waitUntil: 'networkidle2'});
  });

  test('initial tables exist', async () => {
  });
});

