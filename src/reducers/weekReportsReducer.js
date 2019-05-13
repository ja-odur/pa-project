import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function weeklyReportReducer(state=initialState.weeklyReports, action) {
  switch(action.type){
    case types.LOAD_WEEKLY_SUCCESS:
      // debugger;
      return action.reports;


    default:
      return state;
  }
}
