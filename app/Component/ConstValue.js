export const BASE_URL_GITHUB = 'https://api.github.com/search/repositories?sort=stars&order=desc&page=';
export const BASE_URL_STACKOVERFLOW = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&page=';
export const GITHUB = 'github';
export const STACKOVERFLOW = 'stackoverflow';

export const LANGUAGE_IMAGE_URL = 'Page/image/language/';

export const LANGUAGES = {
  all: {
    name: 'all',
    image: 'icon/code.png',
    banner: 'banner/star-wars.jpg'
  },
  javascript: {
    name: 'javascript',
    image: 'icon/js.png',
    banner: 'banner/js.jpg'
  },
  html: {
    name: 'html',
    image: 'icon/html.png',
    banner: 'banner/html.png'
  },
  python: {
    name: 'python',
    image: 'icon/python.png',
    banner: 'banner/python.jpg'
  },
  ruby: {
    name: 'ruby',
    image: 'icon/ruby.png',
    banner: 'banner/ruby.jpg'
  },
  css: {
    name: 'css',
    image: 'icon/css.png',
    banner: 'banner/css.png'
  },
  java: {
    name: 'java',
    image: 'icon/java.png',
    banner: 'banner/java.jpg'
  },
  node: {
    name: 'node',
    image: 'icon/nodejs.png',
    banner: 'banner/nodejs.jpg'
  },
  swift: {
    name: 'swift',
    image: 'icon/swift.png',
    banner: 'banner/swift.jpg'
  },
  php: {
    name: 'php',
    image: 'icon/php.png',
    banner: 'banner/php.png'
  },
  go: {
    name: 'go',
    image: 'icon/go.png',
    banner: 'banner/go.jpg'
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
