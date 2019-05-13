import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/reportActions';
import OrderList from './OrderList';
import {browserHistory} from 'react-router';


class ReportsPage extends React.Component {
  constructor(props, context){
    super(props, context);

  this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  componentWillMount(){
    this.props.actions.loadReports()
  }

  courseRow(course, index){
    console.log('test');
    return (
      <div key={index}>{course.title}</div>
    );
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {orders} = this.props;
    return (
      <div>

        <OrderList orders={orders} redirectFunc={this.redirectToAddCoursePage}/>

      </div>
    );
  }
}

ReportsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  orders: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    orders: state.reports
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsPage);


