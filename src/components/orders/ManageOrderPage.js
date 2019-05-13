import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from "../../actions/reportActions";
import ReportForm from './OrderForm';
import toastr from 'toastr';

export class ManageOrderPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors:{},
      saving: false
    };
    this.updateCoursesState = this.updateCoursesState.bind(this);
    this.saveOrder = this.saveOrder.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.course .id != nextProps.course.id){
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCoursesState(event) {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  orderFormIsValid(){
    let formISValid = true;
    let errors = {};

    [formISValid, errors.client] = this.checkEmpty(this.state.course.client, errors.client, formISValid);
    [formISValid, errors.product] = this.checkEmpty(this.state.course.product, errors.product, formISValid);
    [formISValid, errors.importer] = this.checkEmpty(this.state.course.importer, errors.importer, formISValid);
    [formISValid, errors.importerCost] = this.checkIsPositiveInt(this.state.course.importerCost, errors.importerCost, formISValid);
    [formISValid, errors.cost] = this.checkIsPositiveInt(this.state.course.cost, errors.cost, formISValid);
    [formISValid, errors.paid] = this.checkIsPositiveInt(this.state.course.paid, errors.paid, formISValid);
    [formISValid, errors.quantity] = this.checkQuantity(this.state.course.quantity, errors.quantity, formISValid);

    this.setState({errors: errors});
    return formISValid;
  }

  saveOrder(event) {
    event.preventDefault();

    if(!this.orderFormIsValid()){
      return;
    }

    this.setState({saving: true});
    console.log(this.state.course);
    if (!this.state.course.id) {
      this.props.actions.saveOrder(this.state.course)
        .then(res => {
            if (res.success) {
              this.redirect()
            }
          }
        )
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    }
    else {
      this.props.actions.updateOrder(this.state.course)
        .then(res => {
            if (res.success) {
              this.redirect()
            }
          }
        )
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    }
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Order updated');
    this.context.router.push('/reports');
  }

  checkEmpty(value, errorField, valid) {
    if(value.length === 0){
      errorField = 'This field is required.';
      valid = false;
      return [valid, errorField]
    }
    return [valid, undefined]
  }

  checkIsPositiveInt(value, errorField, valid) {

    if (isNaN(parseInt(value, 10))) {
      errorField = 'This field must be a valid integer.';
      valid = false;
      return [valid, errorField]
    }
    if (parseInt(value, 10) < 0) {
      errorField = 'This field must be a positive integer.';
      valid = false;
      return [valid, errorField]
    }
    return [valid, undefined]
  }

  checkQuantity(value, errorField, valid) {

    if (isNaN(parseInt(value, 10))) {
      errorField = 'This field must be a valid integer.';
      valid = false;
      return [valid, errorField]
    }
    if (parseInt(value, 10) < 1) {
      errorField = 'This field must be a greater than one(1).';
      valid = false;
      return [valid, errorField]
    }
    return [valid, undefined]
  }

  render() {
    return (
      <div>
        <ReportForm
          onChange={this.updateCoursesState}
          onSave={this.saveOrder}
          course={this.state.course}
          errors={this.state.errors}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

ManageOrderPage.propTypes = {
  course: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull thr react router context so router is available on this.context.router
ManageOrderPage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);

  if (course) return course[0]; // since filter returns an array
  return null;
}

function mapStateToProps(state, ownProps) {
  const reportId = ownProps.params.id; // from url 'report/:id'

  let order = {id:'', date:'', client:'', product:'', importer:'',importerCost:' ',cost:'', paid:'', pending:'', profit:'', quantity: ''};

  if(reportId && state.reports.length > 0){
    order = getCourseById(state.reports, reportId);
  }

  return {
    course: order,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrderPage);
