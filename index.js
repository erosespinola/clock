const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function startTime() {
  const today = new Date();
  const h = today.getHours();
  const m = today.getMinutes();
  const s = today.getSeconds();

  const day = DAYS[today.getDay()];
  const month = MONTHS[today.getMonth()];
  const date = today.getDate();
  const year = today.getFullYear();

  console.log(h, m, s);
  console.log(`${day} ${month} ${date} ${year}`);
}
