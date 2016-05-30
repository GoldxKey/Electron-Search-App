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
    it('should change language to \'javascript\'', (done) => {
      state.parameters.language = 'javascript';
      let unsubscribe = subscribeListener(state, done);
      let language = 'javascript';
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

    it('should change name to \'react\'', (done) => {
      state.parameters.name = 'react';
      let unsubscribe = subscribeListener(state, done);
      let name = 'react';
      AppStore.dispatch(ACTIONS.changeName(name));
      unsubscribe();
    });

    it('should change tab to \'ask\'', (done) => {
      state.parameters.tab = 'ask';
      let unsubscribe = subscribeListener(state, done);
      let tab = 'ask';
      AppStore.dispatch(ACTIONS.changeTab(tab));
      unsubscribe();
    });

    it('should change tagged to \'redux\'', (done) => {
      state.parameters.tagged = 'redux';
      let unsubscribe = subscribeListener(state, done);
      let tagged = 'redux';
      AppStore.dispatch(ACTIONS.changeTagged(tagged));
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
