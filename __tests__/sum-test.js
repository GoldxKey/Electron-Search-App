jest.unmock('../app/Component/Message/index.js');
// jest.unmock('../app/Redux/actions/index.js');
// jest.unmock('../app/Redux/reducers/types.js');
// jest.unmock('../app/Redux/ConstValue/DefaultState.js');
// jest.unmock('../app/Redux/ConstValue/BaseUrl');
// import sum from '../app/sum';
//
// describe('sum', () => {
//   it('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {Message} from '../app/Component/Message/index.js';

describe('Message', () => {
  it('changes the message in MessageComponent', () => {
    const message = TestUtils.renderIntoDocument(
      <Message msg="test message" />
    );
    const messageNode = ReactDOM.findDOMNode(message);
    expect(messageNode.textContent).toEqual('test message');
    // TestUtils.Simulate.change(
    //   TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    // );
    // expect(checkboxNode.textContent).toEqual('On');
  });

});

// import * as TYPES from '../app/Redux/actions/types.js';
// import * as ACTIONS from '../app/Redux/actions/index.js';
// import {gitSearchApp} from '../app/Redux/reducers/index.js';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import {expect} from 'chai';
// import {state} from '../app/Redux/ConstValue/DefaultState';
// import should from 'should';
// import {
//   GITHUB,
//   STACKOVERFLOW,
//   CNODEJS,
//   SEGMENTFAULT
// } from '../app/Redux/ConstValue/BaseUrl';
//
// const BASE_SITE = [GITHUB, STACKOVERFLOW, CNODEJS, SEGMENTFAULT];
//
// const AppStore = createStore(
//     gitSearchApp,
//     applyMiddleware(thunk)
// );
//
// describe('actions & state', () => {
//   it('test async action', async () => {
//     await AppStore.dispatch(ACTIONS.fetchGithubItems());
//     let newState = AppStore.getState();
//     expect(newState.searchResult.items.length).not.to.equal(0);
//   });
// })
