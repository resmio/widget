export default function formatDateForApi(date) {
  const year = date.getFullYear();
  // To get days and months with two digits, we add a 0 to the left
  // and pick the last 2 characters from the right
  const paddedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
  const paddedDay = ('0' + date.getDate()).slice(-2);
  return `${year}-${paddedMonth}-${paddedDay}`;
}
