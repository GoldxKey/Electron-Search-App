import * as TYPES from '../app/Redux/actions/types.js';
import * as ACTIONS from '../app/Redux/actions/index.js';
import {gitSearchApp} from '../app/Redux/reducers/index.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {expect} from 'chai';
import {state} from '../app/Redux/ConstValue/DefaultState';
import should from 'should';
import {Provider} from 'react-redux';

const AppStore = createStore(
    state,
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
}

const subscribeListener = (result, done) => {
  return AppStore.subscribe(() => {
    expect(AppStore.getState()).to.deep.equal(result);
    done();
  });
}

// import Dashboard from '../app/Component/Dashboard/index.js';
// import TestUtils from 'react-addons-test-utils';
// function setupComponent() {
//   let renderer = TestUtils.createRenderer();
//   TestUtils.renderIntoDocument(
//     <Provider store={AppStore}>
//       <Dashboard />
//     </Provider>
//   );
//   let output = renderer.getRenderOutput()
//   return {
//     output,
//     renderer
//   }
// }

describe('actions', () => {
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
    })
  });

  describe('test API', () => {
    it('should get items from github', (done) => {
      AppStore.dispatch(ACTIONS.fetchGithubItems()).then(() => {
        DiagnosticAPI(AppStore, done);
      });
    });
    it('should reset page', () => {
      AppStore.dispatch(ACTIONS.changePage(0));
      let page = AppStore.getState().parameters.page;
      expect(page).to.deep.equal(0);
    });

    it('should get items from stackoverflow', (done) => {
      AppStore.dispatch(ACTIONS.fetchStackoverflowItems()).then(() => {
        DiagnosticAPI(AppStore, done);
      });
    });
    it('should reset page', () => {
      AppStore.dispatch(ACTIONS.changePage(0));
      let page = AppStore.getState().parameters.page;
      expect(page).to.deep.equal(0);
    });

    it('should get items from cnodejs', (done) => {
      AppStore.dispatch(ACTIONS.fetchCnodejsItems()).then(() => {
        DiagnosticAPI(AppStore, done);
      });
    });
    it('should reset page', () => {
      AppStore.dispatch(ACTIONS.changePage(0));
      let page = AppStore.getState().parameters.page;
      expect(page).to.deep.equal(0);
    });

    it('should get items from segmentfault', (done) => {
      AppStore.dispatch(ACTIONS.fetchSegmentfaultItems()).then(() => {
        DiagnosticAPI(AppStore, done);
      });
    });
  });
});

// describe('react component', () => {
//   describe('dashboard', () => {
//     it('test dashboard', () => {
//       // const { output } = setupComponent();
//       let testComponent = setupComponent();
//       expect(testComponent).toExist();
//       // expect(output.type).toBe('div');
//       // expect(output.props.className).toBe('dashboard_container');
//     });
//   });
// });
