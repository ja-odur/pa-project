import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('store', () => {
  it('should handle craeting orders', function () {
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'clean Code'
    };

    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    const actual = store.getState().orders[0];
    const expected = {
      title: 'clean Code'
    };

    expect(actual).toEqual(expected);
  })
});
