import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav className="header-nav">
      <IndexLink to="/reports" activeClassName="active">Orders</IndexLink>
      {" | "}
      <Link to="/course" activeClassName="active">Add Order</Link>
      {" | "}
      <Link to="/orders/weekly-view" activeClassName="active">Weekly View</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired

};

export  default Header;
