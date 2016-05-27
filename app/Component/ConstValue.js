export const BASE_URL_GITHUB = 'https://api.github.com/search/repositories?sort=stars&order=desc&page=';
export const BASE_URL_STACKOVERFLOW = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&page=';
export const BASE_URL_STACKOVERFLOW_SEARCH = 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&page=';
export const BASE_URL_CNODEJS = 'https://cnodejs.org/api/v1/topics?mdrender=false&page=';
export const BASE_URL_CNODEJS_DETAIL = 'https://cnodejs.org/api/v1/topic/';

export const GITHUB = 'github';
export const STACKOVERFLOW = 'stackoverflow';
export const CNODEJS = 'cnodejs';
export const HACKER_NEWS = 'hacker news';

export const SITE_LOGOS = {
  github: {
    name: GITHUB,
    logo: require('../Page/image/logos/github.png'),
    searchAble: true,
    parameter: 'language'
  },
  stackoverflow: {
    name: STACKOVERFLOW,
    logo: require('../Page/image/logos/stackoverflow.png'),
    searchAble: true,
    parameter: 'tagged'
  },
  cnodejs: {
    name: CNODEJS,
    logo: require('../Page/image/logos/cnodejs.png'),
    searchAble: false,
    parameter: 'tab'
  }
};

export const LANGUAGE_IMAGE_URL = 'Page/image/language/';

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
}

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
