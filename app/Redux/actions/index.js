import fetch from 'isomorphic-fetch';

import {
  BASE_URL,
  TIME_OPTIONS
} from '../../Component/ConstValue';

export const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
export const changeMessage = (message, messageType) => {
  return {
    type: CHANGE_MESSAGE,
    msg: {
      message,
      messageType
    }
  }
};

export const CHANGE_LANGUAGE_MODAL_STATUS = 'CHANGE_LANGUAGE_MODAL_STATUS';
export const changeLanguageModalStatus = (status) => {
  return {
    type: CHANGE_LANGUAGE_MODAL_STATUS,
    status
  }
};

// parameters
export const CHANGE_NAME = 'CHANGE_NAME';
export const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    name
  }
};

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const changeLanguage = (language) => {
  return {
    type: CHANGE_LANGUAGE,
    language
  }
};

export const CHANGE_STARS = 'CHANGE_STARS';
export const changeStars = (stars) => {
  return {
    type: CHANGE_STARS,
    stars
  }
};

export const CHANGE_TIME = 'CHANGE_TIME';
export const changeTime = (index) => {
  return {
    type: CHANGE_TIME,
    index
  }
};

export const loadNextPage = () => {
  return (dispatch, getState) => {
    let {parameters} = getState();
    let {loadingPage} = parameters;
    if(!loadingPage) {
      dispatch(changeMessage('加载下一页...', 'positive'));
      dispatch(changeLoadingPageStatus(true));
      dispatch(fetchSearch(false));
    }
  }
};

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const changePage = (page) => {
  return {
    type: CHANGE_PAGE,
    page
  }
};

export const CHANGE_LOADING_PAGE_STATUS = 'CHANGE_LOADING_PAGE_STATUS';
export const changeLoadingPageStatus = (status) => {
  return {
    type: CHANGE_LOADING_PAGE_STATUS,
    status
  }
};

// totalCount
export const CHANGE_TOTAL_COUNT = 'CHANGE_TOTAL_COUNT';
export const changeTotalCount = (totalCount) => {
  return {
    type: CHANGE_TOTAL_COUNT,
    totalCount
  }
};

// items
export const RESET_ITEMS = 'RESET_ITEMS';
export const resetItems = (items) => {
  return {
    type: RESET_ITEMS,
    items
  }
};

export const APPEND_ITEMS = 'APPEND_ITEMS';
export const appendItems = (items) => {
  return {
    type: APPEND_ITEMS,
    items
  }
};

export const fetchSearch = (loadingStatus = true) => {
  return (dispatch, getState) => {
    let {parameters} = getState();
    dispatch(changeLoadingStatus(loadingStatus));

    let page = parseInt(parameters.page) + 1;
    let url = BASE_URL + page + '&q=' + parameters.name + '+stars:' + parameters.stars + '+' + parameters.language;
    if(parameters.time !== Object.keys(TIME_OPTIONS)[0]) {
      url = url + '+created:' + TIME_OPTIONS[parameters.time].range;
    }

    console.log(url);
    fetch(url).then((response) => {
      console.log(response);
      if(response.status === 200) {
        return response.json();
      }
    }).then((data) => {
      console.log(data);
      if(data.items) {
        dispatch(changeTotalCount(data["total_count"]));
        if(loadingStatus) {
          dispatch(changePage(1));
          dispatch(resetSearchResult(data.items));
        }else {
          dispatch(changeLoadingPageStatus(false));
          dispatch(appendSearchResult(data.items));
        }
        dispatch(changeLoadingStatus(false));
      }else {
        if(data.errors) {
          let errorMessage = data.errors[0].message;
          dispatch(changeMessage(errorMessage, 'error'));
        }
      }
    }).catch((err) => {
      dispatch(changeLoadingStatus(false));
    })
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

export const CHANGE_LOADING_STATUS = 'CHANGE_LOADING_STATUS';
export const changeLoadingStatus = (status) => {
  return {
    type: CHANGE_LOADING_STATUS,
    status
  }
};
