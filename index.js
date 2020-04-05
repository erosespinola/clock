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
  const m = checkTime(today.getMinutes());
  const s = checkTime(today.getSeconds());

  const day = DAYS[today.getDay()];
  const month = MONTHS[today.getMonth()];
  const date = today.getDate();
  const year = today.getFullYear();

  setClock(h, m, s);
  setDate(`${day} ${month} ${date} ${year}`);

  setTimeout(startTime, 1000);
}

function setClock(h, m, s) {
  const sections = document.querySelectorAll('.number');
  const time = [h, m, s];

  sections.forEach((section, i) => {
    const value = section.firstChild.nextSibling;
    value.innerHTML = time[i];
  });
}

function setDate(date) {
  const dateWrapper = document.getElementById('date');
  const value = dateWrapper.firstChild.nextSibling;
  value.innerHTML = date;
}

function checkTime(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}
