import formatDateForApi from './formatDateForApi';

const Utils = {
  isSameDay(d1, d2) {
    return formatDateForApi(d1) === formatDateForApi(d2);
  },

  isPastDay(d) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
  }
};

export default Utils;
