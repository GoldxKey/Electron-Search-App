import {
  GITHUB,
  STACKOVERFLOW,
  CNODEJS,
  SEGMENTFAULT
} from './BaseUrl';

export const state = {
  parameters: {
    name: '',
    language: 'all',
    stars: '>=10',
    time: 'time_month',
    page: 0,
    tagged: '',
    tab: 'good'
  },
  searchResult: {
    items: [],
    totalCount: 1,
    loadingPage: false
  },
  modal: {
    languageModal: false,
    loading: true
  },
  sideMenu: {
    showSideMenu: false,
    fullMode: false,
    activeMenu: GITHUB
  },
  msg: {
    message: null,
    messageType: 'default'
  }
};
