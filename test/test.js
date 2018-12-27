const faker = require('faker');
const puppeteer = require('puppeteer');
const Sequelize = require('sequelize');
const pageURL = 'http://127.0.0.1:1337/';

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
describe('Calendar successfully rendered to page', () => {
  beforeEach(async () => {
   page.goto(pageURL, {waitUntil: 'networkidle2'});
  });

  test('calendar headers exist', async () => {
    // let div = '#month-header';
    // const header = await page.$eval(div, e => e.textContent);
    // expect(header).toEqual('December 2018');

  });
});

