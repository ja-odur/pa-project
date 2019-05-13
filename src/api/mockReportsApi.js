import axios from 'axios';
import {reportsUrl, BaseUrl} from './BaseUrls'

const delay = 0;

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (report) => {
  const id =  replaceAll(report.client, ' ', '-');
  return `${id}-${report.product}-${report.date}`
};

const getDate = () => {
  return new Date();
};

class ReportsApi {
  static getAllReports() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        // console.log("reports", r);
        resolve(Object.assign([], reports));
      }, delay);
    });
  }

  static saveReport(report) {
    var report = Object.assign({}, report); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (report.client.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (report.id) {
          const existingCourseIndex = orders.findIndex(a => a.id == report.id);
          orders.splice(existingCourseIndex, 1, report);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new orders in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          const now = new Date();
          report.date = `${now.getDate()}`;
          report.id = generateId(report);
          report.pending = report.cost - report.paid;
          report.profit = report.cost - report.importerCost;
          reports.push(report);
        }

        resolve(report);
      }, delay);

    });
  }

  static deleteCourse(reportId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = reports.findIndex(report => {
          report.id == reportId;
        });
        reports.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }


}

export function getReports(){
  return axios.get(`${reportsUrl}?_order=desc`);
}

export function postOrder(order){
  order.date = getDate();
  order.id =  generateId(order);
  order.pending = (order.cost * order.quantity) - order.paid;
  order.profit = (order.cost  - order.importerCost) * order.quantity;
  return axios.post(reportsUrl, order)
}

export function patchOrder(orderId, order){
  order.pending = (order.cost * order.quantity) - order.paid;
  order.profit = (order.cost  - order.importerCost) * order.quantity;
  return axios.patch(`${reportsUrl}/${orderId}`, order)
}



export default ReportsApi;
