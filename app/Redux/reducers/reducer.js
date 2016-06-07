import * as TYPES from '../actions/types.js';
import defaultState from '../ConstValue/DefaultState';
import {
  TIME_OPTIONS
} from '../ConstValue/TimeOptions';

export function detail(detail = defaultState.detail, action) {
  switch (action.type) {
  case TYPES.SET_CNODEJS_TOPIC:
    return setState(detail, {
      title: action.data.title,
      content: action.data.content,
      time: action.data.create_at,
      author: setState(detail.author, {
        name: action.data.author.loginname,
        avatar: action.data.author.avatar_url
      }),
      tags: [],
      replies: [...action.data.replies]
    });
  case TYPES.SET_SEGMENTFAULT_ARTICLE:
  case TYPES.SET_SEGMENTFAULT_QUESTION:
    console.log('test');
    console.log(action.data);
    let detailTag = getAllTags(action.data.tags);
    return setState(detail, {
      title: action.data.title,
      content: action.data.originalText,
      time: action.data.createdDate,
      author: setState(detail.author, {
        name: action.data.user.name,
        avatar: action.data.user.avatarUrl
      }),
      tags: [...detailTag],
      replies: [],
      isAccepted: action.data.votes > 10 || action.data.isAccepted
    });
  case TYPES.SET_SEGMENTFAULT_ANSWERS:
    let answerList = [];
    action.data.available.map((answerObj) => {
      answerList.push({
        time: answerObj.createdDate,
        content: answerObj.originalText,
        name: answerObj.user.name,
        avatar: answerObj.user.avatarUrl
      });
    });
    return setState(detail, {
      replies: [...answerList]
    });
  default:
    return detail;
  }
}

export function setting(setting = defaultState.setting, action) {
  switch (action.type) {
  case TYPES.ADD_SITE:
    return setState(setting, {
      sites: [...setting.sites, action.site]
    });
  case TYPES.DELETE_SITE:
    return setState(setting, {
      sites: setting.sites.filter((site) => site !== action.site)
    });
  default:
    return setting;
  }
}

export function msg(msg = defaultState.msg, action) {
  switch (action.type) {
  case TYPES.CHANGE_MESSAGE:
    return setState(msg, action.msg);
  default:
    return msg;
  }
}

export function sideMenu(sideMenu = defaultState.sideMenu, action) {
  switch (action.type) {
  case TYPES.CHANGE_SIDE_MENU_STATUS:
    return setState(sideMenu, {
      showSideMenu: action.status
    });
  case TYPES.CHANGE_ACTIVE_MENU:
    return setState(sideMenu, {
      activeMenu: action.menu
    });
  default:
    return sideMenu;
  }
}

export function modal(modal = defaultState.modal, action) {
  switch (action.type) {
  case TYPES.CHANGE_LANGUAGE_MODAL_STATUS:
    return setState(modal, {
      languageModal: action.status
    });
  case TYPES.CHANGE_LOADING_STATUS:
    return setState(modal, {
      loading: action.status
    });
  default:
    return modal;
  }
}

export function parameters(parameters = defaultState.parameters, action) {
  switch (action.type) {
  case TYPES.CHANGE_NAME:
    return setState(parameters, {
      name: action.name
    });
  case TYPES.CHANGE_LANGUAGE:
    return setState(parameters, {
      language: action.language
    });
  case TYPES.CHANGE_STARS:
    return setState(parameters, {
      stars: '>=' + action.stars
    });
  case TYPES.CHANGE_TIME:
    return setState(parameters, {
      time: Object.keys(TIME_OPTIONS)[action.index]
    });
  case TYPES.CHANGE_PAGE:
    return setState(parameters, {
      page: action.page
    });
  case TYPES.CHANGE_TAGGED:
    return setState(parameters, {
      tagged: action.tagged
    });
  case TYPES.CHANGE_TAB:
    return setState(parameters, {
      tab: action.tab
    });
  default:
    return parameters;
  }
}

export function searchResult(searchResult = defaultState.searchResult, action) {
  switch (action.type) {
  case TYPES.CHANGE_TOTAL_COUNT:
    return setState(searchResult, {
      totalCount: action.totalCount
    });
  case TYPES.RESET_ITEMS:
    return setState(searchResult, {
      items: [...action.items]
    });
  case TYPES.APPEND_ITEMS:
    return setState(searchResult, {
      items: [...searchResult.items, ...action.items]
    });
  case TYPES.CHANGE_LOADING_PAGE_STATUS:
    return setState(searchResult, {
      loadingPage: action.status
    });
  default:
    return searchResult;
  }
}

function setState(pre, next) {
  return Object.assign({}, pre, next);
}

function getAllTags(tags) {
  let detailTag = [];
  tags.map((tag) => {
    detailTag.push(tag.name);
  });
  return detailTag;
}
