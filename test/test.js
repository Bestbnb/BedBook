const faker = require('faker');
const puppeteer = require('puppeteer');
const Sequelize = require('sequelize');
const pageURL = 'http://127.0.0.1:1337/';

// ---------------------------------------------------------------
// Puppeteer Setup
// ---------------------------------------------------------------
let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async function() {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(function() {
  browser.close();
});

// ---------------------------------------------------------------
// Tests
// ---------------------------------------------------------------
describe('Calendar Module successfully rendered to page', function() {

  beforeEach(async function() {
   await page.goto(pageURL, {waitUntil: 'networkidle2'});
  });

  test('calendar headers exist', async function() {
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
    const thisMonth = `${months[d.getMonth()]} ${d.getFullYear()}`
    let div = '#month-header';
    const header = await page.$eval(div, function(e) {return e.textContent});
    expect(header).toEqual(`${thisMonth}`);
  });

  test('calendar has rendered 6 rows for dates', async function() {
    let div = '.body';
    const calendarRows = await page.$eval(div, function(e) {return e.children.length});
    expect(calendarRows).toEqual(6);
  });
});

describe('Booking Module successfully rendered to page', function() {

  beforeEach(async function() {
   await page.goto(pageURL, {waitUntil: 'networkidle2'});
  });

  test('Booking layout exists (description check)', async function() {
    let div = '.description';
    const description = await page.$eval(div, function(e) {return e.textContent});
    expect(typeof description).toEqual('string');
  });

  test('Booking layout exists (reviews check)', async function() {
    let div = '.reviews';
    const reviews = await page.$eval(div, function(e) {return e.textContent});
    expect(typeof reviews).toEqual('string');
  });
});

