import fetch from 'isomorphic-fetch';

import {
  BASE_URL_GITHUB,
  BASE_URL_STACKOVERFLOW,
  BASE_URL_STACKOVERFLOW_SEARCH,
  BASE_URL_CNODEJS,
  BASE_URL_CNODEJS_DETAIL,
  BASE_URL_SEGMENTFAULT_SEARCH,
  STACKOVERFLOW,
  GITHUB,
  CNODEJS,
  SEGMENTFAULT
} from '../ConstValue/BaseUrl.js';

import {
  TIME_OPTIONS
} from '../ConstValue/TimeOptions';

import * as TYPES from './types.js';

export const changeMessage = (message, messageType) => {
  return {
    type: TYPES.CHANGE_MESSAGE,
    msg: {
      message,
      messageType
    }
  }
};

// modal
export const changeLanguageModalStatus = (status) => {
  return {
    type: TYPES.CHANGE_LANGUAGE_MODAL_STATUS,
    status
  }
};

export const changeLoadingStatus = (status) => {
  return {
    type: TYPES.CHANGE_LOADING_STATUS,
    status
  }
};

// sideMenu
export const changeSideMenuStatus = (status) => {
  return {
    type: TYPES.CHANGE_SIDE_MENU_STATUS,
    status
  }
};

export const toggleSideMenuFullMode = (status) => {
  return {
    type: TYPES.TOGGLE_SIDE_MENU_FULL_MODE,
    status
  }
};

export const changeActiveMenu = (menu) => {
  return {
    type: TYPES.CHANGE_ACTIVE_MENU,
    menu
  }
};

export const changeSite = (site) => {
  return (dispatch) => {
    dispatch(resetState());
    dispatch(changeActiveMenu(site));
    return dispatch(fetchItems());
  }
}

export const resetState = () => {
  return (dispatch) => {
    dispatch(changePage(0));
    dispatch(resetSearchResult([]));
    dispatch(changeTotalCount(1));
  }
}

// parameters
export const changeName = (name) => {
  return {
    type: TYPES.CHANGE_NAME,
    name
  }
};

export const changeLanguage = (language) => {
  return {
    type: TYPES.CHANGE_LANGUAGE,
    language
  }
};

export const changeStars = (stars) => {
  return {
    type: TYPES.CHANGE_STARS,
    stars
  }
};

export const changeTime = (index) => {
  return {
    type: TYPES.CHANGE_TIME,
    index
  }
};

export const changePage = (page) => {
  return {
    type: TYPES.CHANGE_PAGE,
    page
  }
};

export const changeTagged = (tagged) => {
  return {
    type: TYPES.CHANGE_TAGGED,
    tagged
  }
};

export const changeTab = (tab) => {
  return {
    type: TYPES.CHANGE_TAB,
    tab
  }
};

// searchResult
export const loadNextPage = () => {
  return (dispatch, getState) => {
    let {searchResult} = getState();
    let {loadingPage} = searchResult;
    if(!loadingPage) {
      dispatch(changeMessage('加载下一页...', 'positive'));
      dispatch(changeLoadingPageStatus(true));
      dispatch(fetchItems(false));
    }
  }
};

export const changeLoadingPageStatus = (status) => {
  return {
    type: TYPES.CHANGE_LOADING_PAGE_STATUS,
    status
  }
};

export const changeTotalCount = (totalCount) => {
  return {
    type: TYPES.CHANGE_TOTAL_COUNT,
    totalCount
  }
};

export const changeRemainingCount = (remainingCount) => {
  return {
    type: TYPES.CHANGE_REMAINING_COUNT,
    remainingCount
  }
};

// items
export const resetItems = (items) => {
  return {
    type: TYPES.RESET_ITEMS,
    items
  }
};

export const appendItems = (items) => {
  return {
    type: TYPES.APPEND_ITEMS,
    items
  }
};

export const fetchItems = (loadingStatus = true) => {
  return (dispatch, getState) => {
    let {sideMenu, searchResult} = getState();
    let {activeMenu} = sideMenu;
    let {items, totalCount} = searchResult;
    if(items.length < totalCount) {
      switch (activeMenu) {
      case GITHUB:
        return dispatch(fetchGithubItems(loadingStatus));
        break;
      case STACKOVERFLOW:
        return dispatch(fetchStackoverflowItems(loadingStatus));
        break;
      case CNODEJS:
        return dispatch(fetchCnodejsItems(loadingStatus));
        break;
      case SEGMENTFAULT:
        return dispatch(fetchSegmentfaultItems(loadingStatus));
        break;
      default:
        return false;
      }
    }
  }
};

export const fetchSegmentfaultItems = (loadingStatus = true) => {
  return (dispatch, getState) => {
    let {parameters} = getState();
    dispatch(changeLoadingStatus(loadingStatus));
    let {name, page} = parameters;
    page = parseInt(page) + 1;
    name = name ? name : '.json';
    let url = BASE_URL_SEGMENTFAULT_SEARCH + page + '&q=' + name;
    console.log(url);
    return fetch(url).then((response) => {
      if(response.status === 200) {
        return response.json();
      }
    }).then((data) => {
      let resultData = data.data;
      if(resultData) {
        dispatch(changeTotalCount(resultData.page.total));
        if(loadingStatus) {
          dispatch(changePage(1));
          dispatch(resetSearchResult(resultData.rows));
        }else {
          dispatch(changeLoadingPageStatus(false));
          dispatch(appendSearchResult(resultData.rows));
        }
        dispatch(changeLoadingStatus(false));
      }
    }).catch((err) => {
      dispatch(changeMessage('wtf', 'error'));
      dispatch(changeLoadingStatus(false));
    });
  }
};

// BASE_URL_CNODEJS
export const fetchCnodejsItems = (loadingStatus = true) => {
  return (dispatch, getState) => {
    let {parameters} = getState();
    dispatch(changeLoadingStatus(loadingStatus));
    let {tab, page} = parameters;
    page = parseInt(page) + 1;
    let url = BASE_URL_CNODEJS + page + '&tab=' +tab;
    console.log(url);
    return fetch(url).then((response) => {
      if(response.status === 200) {
        return response.json();
      }
    }).then((data) => {
      if(data.success) {
        dispatch(changeTotalCount(data.data.length + 1));
        if(loadingStatus) {
          dispatch(changePage(1));
          dispatch(resetSearchResult(data.data));
        }else {
          dispatch(changeLoadingPageStatus(false));
          dispatch(appendSearchResult(data.data));
        }
        dispatch(changeLoadingStatus(false));
      }
    }).catch((err) => {
      dispatch(changeMessage('wtf', 'error'));
      dispatch(changeLoadingStatus(false));
    })
  }
}

export const fetchStackoverflowItems = (loadingStatus = true) => {
  return (dispatch, getState) => {
    let {parameters} = getState();
    let {name, tagged, page} = parameters;
    dispatch(changeLoadingStatus(loadingStatus));
    page = parseInt(page) + 1;
    let url = BASE_URL_STACKOVERFLOW + page;
    if(name) {
      url =  BASE_URL_STACKOVERFLOW_SEARCH + page + '&intitle=' + name;
    }
    if(tagged) {
      url = url + '&tagged=' + tagged;
    }
    console.log(url);
    return fetch(url).then((response) => {
      if(response.status === 200) {
        return response.json();
      }
    }).then((data) => {
      if(data.items) {
        dispatch(changeTotalCount(data["quota_max"]));
        if(loadingStatus) {
          dispatch(changePage(1));
          dispatch(resetSearchResult(data.items));
        }else {
          dispatch(changeLoadingPageStatus(false));
          dispatch(appendSearchResult(data.items));
        }
        dispatch(changeLoadingStatus(false));
      }
    }).catch((err) => {
      dispatch(changeMessage('wtf', 'error'));
      dispatch(changeLoadingStatus(false));
    });
  }
}

export const fetchGithubItems = (loadingStatus = true) => {
  return (dispatch, getState) => {
    let {parameters} = getState();
    dispatch(changeLoadingStatus(loadingStatus));
    let {name, page, stars, language, time} = parameters;

    page = parseInt(page) + 1;
    let url = BASE_URL_GITHUB + page + '&q=' + name + '+stars:' + stars + '+language:' + language;
    if(time !== Object.keys(TIME_OPTIONS)[0]) {
      url = url + '+created:' + TIME_OPTIONS[time].range;
    }

    console.log(url);
    return fetch(url).then((response) => {
      if(response.status === 200) {
        return response.json();
      }
    }).then((data) => {
      if(data.items) {
        dispatch(changeTotalCount(data["total_count"]));
        if(loadingStatus) {
          dispatch(changePage(1));
          dispatch(resetSearchResult(data.items));
        }else {
          dispatch(changeLoadingPageStatus(false));
          dispatch(appendSearchResult(data.items));
        }
      }else {
        if(data.errors) {
          let errorMessage = data.errors[0].message;
          dispatch(changeMessage(errorMessage, 'error'));
        }
      }
      dispatch(changeLoadingStatus(false));

    }).catch((err) => {
      dispatch(changeMessage(err, 'error'));
      dispatch(changeLoadingStatus(false));
    });
  }
};

export const resetSearchResult = (items) => {
  return (dispatch, getState) => {
    dispatch(resetItems(items));
  }
};

export const appendSearchResult = (items) => {
  return (dispatch, getState) => {
    let {parameters} = getState();
    let {page} = parameters;
    dispatch(changePage(parseInt(page) + 1));
    dispatch(appendItems(items))
  }
};
