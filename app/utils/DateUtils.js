import formatDate from './formatDateForApi';

const Utils = {
  isSameDay(d1, d2) {
    return formatDate(d1) === formatDate(d2);
  },

  isPastDay(d) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
  }
};

export default Utils;
