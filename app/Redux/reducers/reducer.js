import * as ACTIONS from '../actions/index';

import {
  TIME_OPTIONS,
  GITHUB
} from '../../Component/ConstValue';

const state = {
  parameters: {
    name: '',
    language: 'language:all',
    stars: '>=10',
    time: Object.keys(TIME_OPTIONS)[0],
    page: 0,
    tagged: ''
  },
  searchReasult: {
    items: [],
    totalCount: 0,
    loadingPage: false,
    remainingCount: 0
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
      language: 'language:' + action.language
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

export function searchReasult(searchReasult = state.searchReasult, action) {
  switch (action.type) {
  case ACTIONS.CHANGE_TOTAL_COUNT:
    return setState(searchReasult, {
      totalCount: action.totalCount
    });
  case ACTIONS.CHANGE_REMAINING_COUNT:
    return setState(searchReasult, {
      remainingCount: action.remainingCount
    });
  case ACTIONS.RESET_ITEMS:
    return setState(searchReasult, {
      items: [...action.items]
    });
  case ACTIONS.APPEND_ITEMS:
    return setState(searchReasult, {
      items: [...searchReasult.items, ...action.items]
    });
  case ACTIONS.CHANGE_LOADING_PAGE_STATUS:
    return setState(searchReasult, {
      loadingPage: action.status
    });
  default:
    return searchReasult;
  }
}

function setState(pre, next) {
  return Object.assign({}, pre, next);
}
