import {combineReducers} from 'redux';
import courses from './courseReducers';
import authors from './authorReducer';
import reports from './reportReducers'
import weeklyReports from './weekReportsReducer'
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  reports,
  weeklyReports,
  ajaxCallsInProgress
});

export default rootReducer;
