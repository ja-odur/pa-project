import expect from 'expect';
import courseReducer from './courseReducers';
import * as actions from '../actions/courseActions';

describe('Course reducer', () => {
  it('should add course if CREATE_COURSE_SUCCESS pass', () => {
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = {title: 'C'};

    const action = actions.createCourseSuccess(newCourse);

    const newState = courseReducer(initialState, action);

    expect(newState.length).t
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');

  });

  it('should update course if UPDATE_COURSE_SUCCESS pass', () => {
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'c'}
    ];

    const course = {id: 'B', title: 'New title'};

    const action = actions.updateCourseSuccess(course);

    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    expect(updatedCourse.title).toEqual('New title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
