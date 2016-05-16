import fetch from 'isomorphic-fetch';

import {
  BASE_URL
} from '../../Component/ConstValue';

export const CHANGE_LANGUAGE_MODAL_STATUS = 'CHANGE_LANGUAGE_MODAL_STATUS';
export const changeLanguageModalStatus = (status) => {
  return {
    type: CHANGE_LANGUAGE_MODAL_STATUS,
    status
  }
};

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

export const CHANGE_TOTAL_COUNT = 'CHANGE_TOTAL_COUNT';
export const changeTotalCount = (totalCount) => {
  return {
    type: CHANGE_TOTAL_COUNT,
    totalCount
  }
};

export const RESET_ITEMS = 'RESET_ITEMS';
export const resetItems = (items) => {
  return {
    type: RESET_ITEMS,
    items
  }
};

export const fetchSearch = () => {
  return (dispatch, getState) => {
    let {parameters} = getState();
    dispatch(changeLoadingStatus(true));
    let url = BASE_URL + parameters.name + '+stars:' + parameters.stars + '+' + parameters.language;
    console.log(url);
    fetch(url).then((response) => {
      if(response.status === 200) {
        return response.json();
      }
    }).then((data) => {
      if(data.items) {
        dispatch(changeTotalCount(data["total_count"]));
        dispatch(resetItems(data.items));
        dispatch(changeLoadingStatus(false));
      }
    }).catch((err) => {
      dispatch(changeLoadingStatus(false));
    })
  }
};

export const CHANGE_LOADING_STATUS = 'CHANGE_LOADING_STATUS';
export const changeLoadingStatus = (status) => {
  return {
    type: CHANGE_LOADING_STATUS,
    status
  }
};
