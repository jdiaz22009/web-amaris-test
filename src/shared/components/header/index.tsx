/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles.scss";

import Logo from "../../../assets/images/LOGO.png";
import Search from "../../../assets/icon-search.png";
const HeaderComponents = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg rowLogIn">
        <div className="container-fluid">
          <a className="navbar-brand m-4">
            <img src={Logo} alt="Logo" width="auto" height="auto" />
          </a>

          <div className="navbar-collapse m-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shell
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Markeplace
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Comunity
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Comunity
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Analyze
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          <div className="m-4 row">
            <div className="col-4">
              <button type="button" className="btn  mb-2">
                Log In
              </button>
            </div>

            <div className="col-6">
              <button type="button" className="btn btn-button mb-2">
                Get Started
              </button>
            </div>

            <div className="col-1">
              <button type="button" className="btn  mb-2">
                <img src={Search} alt="Logo" width="auto" height="auto" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponents;
