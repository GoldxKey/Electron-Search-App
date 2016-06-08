import {
  GITHUB,
  STACKOVERFLOW,
  CNODEJS,
  SEGMENTFAULT
} from './BaseUrl';

const defaultState = {
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
    showSideMenu: true,
    activeMenu: GITHUB
  },
  msg: {
    message: null,
    messageType: 'default'
  },
  setting: {
    sites: [GITHUB, STACKOVERFLOW, CNODEJS, SEGMENTFAULT]
  },
  detail: {
    title: '',
    content: '',
    time: '',
    author: {
      name: '',
      avatar: ''
    },
    tags: [],
    replies: [],
    hasReply: true,
    isAccepted: false,
    loading: false
  }
};

export default defaultState;
