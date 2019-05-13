import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/reportActions';
import OrderWeeklyList from './OrderWeeklyList';
import {browserHistory} from 'react-router';


class OrderWeeklyViewPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  componentDidMount(){
    this.props.actions.weeklyView()
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

        <OrderWeeklyList weeklyOrders={this.props.weeklyOrders}/>

      </div>
    );
  }
}

OrderWeeklyViewPage.propTypes = {
  actions: PropTypes.object.isRequired,
  weeklyOrders: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    weeklyOrders: state.weeklyReports
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderWeeklyViewPage);


