import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Router, browserHistory} from 'react-router';
import configureSore from './store/configureStore';
import {loadCourses} from './actions/courseActions';
import {loadReports, weeklyView, b} from './actions/reportActions';
import {loadAuthors} from './actions/authorActions';
import {Provider} from 'react-redux';
import routes from './routes';
import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Jquery from 'jquery'
import '../node_modules/toastr/build/toastr.min.css';

const store = configureSore();
// store.dispatch(loadCourses());
// store.dispatch(loadAuthors());
store.dispatch(loadReports());
store.dispatch(weeklyView());



render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
