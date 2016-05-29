import * as TYPES from '../app/Redux/actions/types.js';
import * as ACTIONS from '../app/Redux/actions/index.js';
import {expect} from 'chai';

var should = require('should');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1,2,3].indexOf(4).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
      [1,2,3].indexOf(1).should.equal(0);
    });
  });
});

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const language = 'python';
    const expectedAction = {
      type: TYPES.CHANGE_LANGUAGE,
      language
    };

    expect(ACTIONS.changeLanguage(language)).to.deep.equal(expectedAction)
  })
})
