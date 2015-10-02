export default function formatTimeForView(timeString) {
  const[ time, modifier ] = timeString.split(' ');
  const[ hour, minutes ] = time.split(':');
  let hourFormatted;

  if (modifier === 'p.m.' && hour !== '12') {
    hourFormatted = (parseInt(hour, 10) + 12).toString();
  } else {
    hourFormatted = hour;
  }

  return (`${hourFormatted}:${minutes}`);
}
