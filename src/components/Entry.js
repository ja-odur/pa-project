import React, {PropTypes} from 'react';
import ResportsHeader from './common/ReportsHeader';
import NavBar from './navbar/NavBar'
import {connect} from 'react-redux';

class Entry extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <ResportsHeader
          loading={this.props.loading}
        />
        {this.props.children}
      </div>
    );
  }
}

Entry.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}


export default connect(mapStateToProps)(Entry);
