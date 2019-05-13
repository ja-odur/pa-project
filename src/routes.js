import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Entry from './components/Entry';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ReportsPage from './components/orders/Orders'
import manageCoursePage from "./components/course/ManageCoursePage";
import ManageReportPage from "./components/orders/ManageOrderPage";
import OrderWeeklyViewPage from "./components/orders/OrderWeeklyView";

import NavBar from "./components/navbar/NavBar"

export default (
  <div>
    <Route path="/" component={Entry}>
      <IndexRoute component={ReportsPage}/>
      <Route path="reports" component={ReportsPage}/>
      <Route path="course" component={ManageReportPage}/>
      <Route path="order/:id" component={ManageReportPage}/>
      <Route path="orders/weekly-view" component={OrderWeeklyViewPage}/>
    </Route>

  </div>
);
