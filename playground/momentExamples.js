const moment = require('moment');

console.log(moment().format());

const now = moment();

console.log('current timestamp', now.unix());

const timestamp = 1496193960;
const currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format('MMMM Do YYYY @ hh:mm A'));
