import * as TYPES from '../app/Redux/actions/types.js';
import * as ACTIONS from '../app/Redux/actions/index.js';
import {gitSearchApp} from '../app/Redux/reducers/index.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {expect} from 'chai';
import {state} from '../app/Redux/ConstValue/DefaultState';
import should from 'should';

const AppStore = createStore(
    gitSearchApp,
    applyMiddleware(thunk)
);

const DiagnosticAPI = (store, done) => {
  let newState = store.getState();
  let newItems = newState.searchResult.items;
  try {
    expect(newItems.length).not.to.equal(0);
    done();
  } catch (err) {
    console.log(err);
  } finally {
  }
};

const subscribeListener = (result, done) => {
  return AppStore.subscribe(() => {
    expect(AppStore.getState()).to.deep.equal(result);
    done();
  });
};

const ApiTest = (action) => {
  it('should get items from API', (done) => {
    AppStore.dispatch(action()).then(() => {
      DiagnosticAPI(AppStore, done);
    });
  });
  it('should reset page', () => {
    AppStore.dispatch(ACTIONS.changePage(0));
    let page = AppStore.getState().parameters.page;
    expect(page).to.deep.equal(0);
  });
};

describe('actions & state', () => {
  describe('test parameters change action', () => {
    it('should change language to \'python\'', (done) => {
      state.parameters.language = 'python';
      let unsubscribe = subscribeListener(state, done);
      let language = 'python';
      AppStore.dispatch(ACTIONS.changeLanguage(language));
      unsubscribe();
    });

    it('should change stars to \'>=30\'', (done) => {
      state.parameters.stars = '>=30';
      let unsubscribe = subscribeListener(state, done);
      let starCount = 30;
      AppStore.dispatch(ACTIONS.changeStars(starCount));
      unsubscribe();
    });
  });

  describe('test API', () => {
    ApiTest(ACTIONS.fetchGithubItems);
    ApiTest(ACTIONS.fetchStackoverflowItems);
    // ApiTest(ACTIONS.fetchCnodejsItems);
    ApiTest(ACTIONS.fetchSegmentfaultItems);
  });

});

describe('test API', () => {
  ApiTest(ACTIONS.fetchGithubItems);
});
