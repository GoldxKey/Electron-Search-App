import * as ACTIONS from '../actions/index';

import {
  TIME_OPTIONS,
  GITHUB,
  STACKOVERFLOW,
  CNODEJS,
  SEGMENTFAULT
} from '../../Component/ConstValue';

const state = {
  parameters: {
    name: '',
    language: 'all',
    stars: '>=10',
    time: Object.keys(TIME_OPTIONS)[2],
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
    activeMenu: CNODEJS
  },
  msg: {
    message: null,
    messageType: 'default'
  }
};

export function msg(msg = state.msg, action) {
  switch (action.type) {
  case ACTIONS.CHANGE_MESSAGE:
    return setState(msg, action.msg);
  default:
    return msg;
  }
}

export function sideMenu(sideMenu = state.sideMenu, action) {
  switch (action.type) {
  case ACTIONS.CHANGE_SIDE_MENU_STATUS:
    return setState(sideMenu, {
      showSideMenu: action.status
    });
  case ACTIONS.TOGGLE_SIDE_MENU_FULL_MODE:
    return setState(sideMenu, {
      fullMode: action.status
    });
  case ACTIONS.CHANGE_ACTIVE_MENU:
    return setState(sideMenu, {
      activeMenu: action.menu
    })
  default:
    return sideMenu;
  }
}

export function modal(modal = state.modal, action) {
  switch (action.type) {
  case ACTIONS.CHANGE_LANGUAGE_MODAL_STATUS:
    return setState(modal, {
      languageModal: action.status
    });
  case ACTIONS.CHANGE_LOADING_STATUS:
    return setState(modal, {
      loading: action.status
    });
  default:
    return modal;
  }
}

export function parameters(parameters = state.parameters, action) {
  switch (action.type) {
  case ACTIONS.CHANGE_NAME:
    return setState(parameters, {
      name: action.name
    });
  case ACTIONS.CHANGE_LANGUAGE:
    return setState(parameters, {
      language: action.language
    });
  case ACTIONS.CHANGE_STARS:
    return setState(parameters, {
      stars: '>=' + action.stars
    });
  case ACTIONS.CHANGE_TIME:
    return setState(parameters, {
      time: Object.keys(TIME_OPTIONS)[action.index]
    });
  case ACTIONS.CHANGE_PAGE:
    return setState(parameters, {
      page: action.page
    });
  case ACTIONS.CHANGE_TAGGED:
    return setState(parameters, {
      tagged: action.tagged
    });
  default:
    return parameters;
  }
}

export function searchResult(searchResult = state.searchResult, action) {
  switch (action.type) {
  case ACTIONS.CHANGE_TOTAL_COUNT:
    return setState(searchResult, {
      totalCount: action.totalCount
    });
  // case ACTIONS.CHANGE_REMAINING_COUNT:
  //   return setState(searchResult, {
  //     remainingCount: action.remainingCount
  //   });
  case ACTIONS.RESET_ITEMS:
    return setState(searchResult, {
      items: [...action.items]
    });
  case ACTIONS.APPEND_ITEMS:
    return setState(searchResult, {
      items: [...searchResult.items, ...action.items]
    });
  case ACTIONS.CHANGE_LOADING_PAGE_STATUS:
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
