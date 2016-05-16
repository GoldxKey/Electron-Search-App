import * as ACTIONS from '../actions/index';

const state = {
  parameters: {
    name: '',
    language: 'language:all',
    stars: '>=10',
  },
  items: [],
  totalCount: 0,
  loading: true
};

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
  default:
    return parameters;
  }
}

export function totalCount(totalCount = state.totalCount, action) {
  switch (action.type) {
  case ACTIONS.CHANGE_TOTAL_COUNT:
    return action.totalCount;
  default:
    return totalCount;
  }
}

export function items(items = state.items, action) {
  switch (action.type) {
  case ACTIONS.RESET_ITEMS:
    return [...action.items];
  default:
    return items;
  }
}

export function loading(loading = state.loading, action) {
  switch (action.type) {
  case ACTIONS.CHANGE_LOADING_STATUS:
    return action.status;
  default:
    return loading;
  }
}

function setState(pre, next) {
  return Object.assign({}, pre, next);
}
