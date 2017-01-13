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

// TODO:
// Create a regex that does this conversion
// Nov. 14, 2016, 12:30 p.m.
// Nov 8 at 20:00
export const formatLocalDate = (date) => {
  return date
}
