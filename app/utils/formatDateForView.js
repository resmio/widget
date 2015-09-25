import {isSameDay} from './DateUtils';

export default function formatDateForView(date) {
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  // We check if the day is today, if is not we get the day of the week name
  const weekDay = isSameDay(date, new Date()) ? 'Today' : weekDays[date.getDay()];
  return `${weekDay}, ${day} ${month} ${year}`;
}
