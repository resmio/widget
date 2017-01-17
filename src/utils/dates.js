// Date, Date => Bool
export const isSameDay = (date, otherDate) => {
    return (
      date.getDate() === otherDate.getDate() &&
      date.getMonth() === otherDate.getMonth() &&
      date.getYear() === otherDate.getYear()
    )
}

// String => Int
export const toDecimalTime = (time) => {
  const timeStr = (
    time
      .match(/\d+/g)
      .map((numStr) => numStr.length < 2 ? 0 + numStr : numStr )
      .join('')
  )
  return parseInt(timeStr, 10)
}

// Date => Int
export const toLinuxTimestamp = (date) => {
  return Date.parse(date)
}

//
export const toMilliseconds = ({
  hours,
  minutes
}) => {
  let result = 0
  if (typeof hours === 'number') {
    result += (hours * 3600000)
  }
  if (typeof minutes === 'number') {
    result += (minutes * 60000)
  }
  return result
}

// TODO:
// Create a regex that does this conversion
// Nov. 14, 2016, 12:30 p.m.
// Nov 8 at 20:00
export const formatLocalDate = (date) => {
  return date
}
