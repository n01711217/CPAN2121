const _ = require('lodash');
const dayjs = require('dayjs');

// List of holidays
const holidays = [
  { name: 'Christmas', date: '2024-12-25' },
  { name: 'Canada Day', date: '2024-07-01' },
  { name: 'New Year', date: '2025-01-01' }
];


holidays.forEach(holiday => {
  const today = dayjs();
  const holidayDate = dayjs(holiday.date);
  const daysLeft = holidayDate.diff(today, 'day');
  console.log(`${holiday.name} is in ${daysLeft} days.`);
});


const randomHoliday = _.sample(holidays);
console.log(`\nRandom Holiday: ${randomHoliday.name} - ${randomHoliday.date}`);

// Index 
const holidayNames = holidays.map(h => h.name);
console.log('Index of Christmas:', _.indexOf(holidayNames, 'Christmas'));
console.log('Index of Canada Day:', _.indexOf(holidayNames, 'Canada Day'));
