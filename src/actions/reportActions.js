import * as types from './actionTypes';
import ReportsApi,{getReports, postOrder, patchOrder} from '../api/mockReportsApi';
import {ajaxCallError, beginAjaxCall} from './ajaxStatusAction';

var byweek = {};

export function loadReportsSuccess(reports) {
  // debugger;
  return { type: types.LOAD_REPORTS_SUCCESS, reports};
}

export function loadReportsWeeklySuccess(reports) {
  // debugger;
  return { type: types.LOAD_WEEKLY_SUCCESS, reports};
}

export function createOrderSuccess(course) {
  return {type: types.CREATE_REPORT_SUCCESS, course};
}

export function  updateCourseSuccess(course) {
  return {type: types.UPDATE_REPORT_SUCCESS, course};
}


export function loadReports() {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    getReports().then(res => {
      dispatch(loadReportsSuccess(res.data));
    });

  };
}

export function saveOrder(order) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return postOrder(order).then( response => {
      // dispatch(loadReportsSuccess(response.data));
      return {success: true}
    }).catch( error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function updateOrder(order) {
  return function (dispatch) {
    return patchOrder(order.id, order).then(response => {
      return {success: true}
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  }
}

export function weeklyView() {
  return function (dispatch) {
    // dispatch(beginAjaxCall());

    byweek = {};

    getReports().then(res => {
      let d = res.data.map(groupWeekly);
      dispatch(loadReportsWeeklySuccess(byweek));
    });

  };
}

function groupWeekly(value, index, array)
{
  let d = new Date(value['date']);

  let singleDay = 1000*60*60*24;
  d = Math.floor(d.getTime()/(singleDay*7));
  let startDate = new Date((d*7 - 3)*singleDay);
  let endDate = new Date((d*7 -3 + 6)*singleDay);
  d = `${startDate},${endDate}`;
  byweek[d]=byweek[d]||[];
  byweek[d].push(value);
}

export function b(){
  return false;
}
