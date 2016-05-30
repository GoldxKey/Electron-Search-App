import moment from 'moment';
let weekBefore = moment().subtract(10, 'days').calendar();
let monthBefore = moment().subtract(31, 'days').calendar();
let yearBefore = moment().subtract(365, 'days').calendar();

export const TIME_OPTIONS = {
  'time_all': {
    name: "不限时间",
    range: null
  },
  'time_year': {
    name: "一年内",
    range: moment(yearBefore).format().split('+')[0] + '..*'
  },
  'time_month': {
    name: "一个月内",
    range: moment(monthBefore).format().split('+')[0] + '..*'
  },
  'time_week': {
    name: "一周以内",
    range: moment(weekBefore).format().split('+')[0] + '..*'
  }
};
