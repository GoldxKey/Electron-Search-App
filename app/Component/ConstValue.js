import * as SITES from '../Redux/ConstValue/BaseUrl.js';

export const SITE_LOGOS = {
  github: {
    name: SITES.GITHUB,
    logo: require('../Page/image/logos/github.png'),
    searchAble: true,
    parameter: 'language'
  },
  stackoverflow: {
    name: SITES.STACKOVERFLOW,
    logo: require('../Page/image/logos/stackoverflow.png'),
    searchAble: true,
    parameter: 'tagged'
  },
  cnodejs: {
    name: SITES.CNODEJS,
    logo: require('../Page/image/logos/cnodejs.png'),
    searchAble: false,
    parameter: 'tab'
  },
  segmentfault: {
    name: SITES.SEGMENTFAULT,
    logo: require('../Page/image/logos/segmentfault.png'),
    searchAble: true,
    parameter: 'name'
  }
};

export const LANGUAGES = {
  all: {
    name: 'all',
    image: require('../Page/image/language/icon/code.png'),
    banner: require('../Page/image/language/banner/star-wars.jpg')
  },
  javascript: {
    name: 'javascript',
    image: require('../Page/image/language/icon/js.png'),
    banner: require('../Page/image/language/banner/js.jpg')
  },
  html: {
    name: 'html',
    image: require('../Page/image/language/icon/html.png'),
    banner: require('../Page/image/language/banner/html.png')
  },
  python: {
    name: 'python',
    image: require('../Page/image/language/icon/python.png'),
    banner: require('../Page/image/language/banner/python.jpg')
  },
  ruby: {
    name: 'ruby',
    image: require('../Page/image/language/icon/ruby.png'),
    banner: require('../Page/image/language/banner/ruby.jpg')
  },
  css: {
    name: 'css',
    image: require('../Page/image/language/icon/css.png'),
    banner: require('../Page/image/language/banner/css.png')
  },
  java: {
    name: 'java',
    image: require('../Page/image/language/icon/java.png'),
    banner: require('../Page/image/language/banner/java.jpg')
  },
  node: {
    name: 'node',
    image: require('../Page/image/language/icon/nodejs.png'),
    banner: require('../Page/image/language/banner/nodejs.jpg')
  },
  swift: {
    name: 'swift',
    image: require('../Page/image/language/icon/swift.png'),
    banner: require('../Page/image/language/banner/swift.jpg')
  },
  php: {
    name: 'php',
    image: require('../Page/image/language/icon/php.png'),
    banner: require('../Page/image/language/banner/php.png')
  },
  go: {
    name: 'go',
    image: require('../Page/image/language/icon/go.png'),
    banner: require('../Page/image/language/banner/go.jpg')
  }
};

export const ADVANCE_LANGUAGES = {
  lua: {
    name: 'lua'
  },
  C: {
    name: 'C'
  },
  'C++': {
    name: 'C++'
  },
  CoffeeScript: {
    name: 'coffeescript'
  },
  haskell: {
    name: 'haskell'
  },
  'Object-C': {
    name: 'Object-C'
  },
  Pascal: {
    name: 'Pascal'
  },
  R: {
    name: 'R'
  },
  TypeScript: {
    name: 'TypeScript'
  },
  Shell: {
    name: 'Shell'
  },
  Scheme: {
    name: 'Scheme'
  }
};

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

export const TECH_LIST = ['electron', 'react', 'redux', 'react-router', 'webpack', 'marked'];
