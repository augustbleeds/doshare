const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December'];

export function getDay(dateObj) {
  return days[dateObj.getDay()];
}

export function getStringDate(dateObj) {
  return `${months[dateObj.getMonth() + 1]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
}

export const a = '3';
