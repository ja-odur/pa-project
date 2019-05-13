import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from "../../actions/courseActions";
import CourseForm from './CourseForm';
import toastr from 'toastr';
import {authorsFormattedForDropdown} from '../../selectors/selectors'

export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors:{},
      saving: false
    };
    this.updateCoursesState = this.updateCoursesState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
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

  courseFormIsValid(){
    let formISValid = false;
    let errors = {};

    if(this.state.course.title.length < 5){
      errors.title = 'Title must be at least 5 characters.';
      formISValid = false;
    }

    this.setState({errors: errors});
    return formISValid;
  }

  saveCourse(event) {
    event.preventDefault();

    if(!this.courseFormIsValid()){
      return;
    }
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course Saved');
    this.context.router.push('/orders');
  }

  render() {
    return (
      <div>
        <CourseForm
          allAuthors={this.props.authors}
          onChange={this.updateCoursesState}
          onSave={this.saveCourse}
          course={this.state.course}
          errors={this.state.errors}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull thr react router context so router is available on this.context.router
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);

  if (course) return course[0]; // since filter returns an array
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from url 'course/:id'

  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if(courseId && state.orders.length > 0){
    course = getCourseById(state.orders, courseId);
  }

  return {
    course: course,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
