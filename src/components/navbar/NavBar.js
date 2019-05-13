import React, {PropTypes} from 'react';


class NavBar extends React.Component {
  render() {
    return (
          <nav className="navbar navbar-expand-lg navbar-dark  p-0 dark row">
            <div className="logo col-md-3">
              <a className="navbar-brand w-25 pl-3 text-white  text-uppercase mt-0" href="#">Abal INVESTMENTS</a>
            </div>
            <div className="col-md-9">
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link nav-on-hover text-white text-uppercase font-weight-bold" href="#">PRODUCTS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-on-hover selected text-white text-uppercase font-weight-bold" href="#">ORDERS</a>
                  </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-secondary my-2 my-sm-0 text-light" type="submit">Search</button>
                </form>
              </div>
            </div>

          </nav>


  );
    }
}



export default NavBar;
