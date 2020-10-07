import React from 'react'
import { NavLink } from "react-router-dom";



const  Nav = (props) => {
    // const {images, firstName,lastName,photo,phone} = props
    // console.log(props)
    const images = props.data[0]
    const name = props.data[1]
    const photo =""+ props.data[2]
    const phone = props.data[3]
    const id = props.data[5]

    const navHome = "/home/" + id
    const navTransfer = "/transfer/" + id
    const navTopup = "/topup/" + id
    const navProfile = "/profile/" + id
    return (
        <>
          <div className="row">
            {/* <!-- START NAV --> */}
            <div className="col-12 p-0 m-0">
              <nav className="w-100 navbar navbar-expand-md navbar-light bg-white nav-zwallet mb-1 py-1">
                <div className="container-fluid">
                  <h3 className="my-auto">
                    <a
                      className="navbar-brand primary-zwallet pl-5 ml-5"
                      href="#"
                    >
                      Zwallet
                    </a>
                  </h3>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse w-100 flex-md-column"
                    id="navbarCollapse"
                  >
                    <div className="row ml-auto small pr-5">
                      <div className="col-1 col-md-2"></div>
                      <div className="col-3 col-md-2">
                        <ul className="navbar-nav ml-auto h2">
                          <li className="nav-item active">
                            <a className="nav-link px-2" href="#">
                              <img src={images[photo]} alt="user" className="avatar-zwallet" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6 col-md-6 pt-1">
                        <ul className="navbar-nav">
                          <li className="nav-item active">
                            <a className="nav-link pb-1 pt-2" href="#">
                              {name}
                            </a>
                          </li>
                        </ul>
                        <ul className="navbar-nav small">
                          <li className="nav-item active">
                            <a className="nunito-grey nav-link py-1" href="#">
                              {phone}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-1 col-md-2 p-3">
                        <ul className="navbar-nav">
                          <li className="nav-item active">
                            <a className="nav-link py-1" href="#">
                              <img
                                src={images["notification.svg"]}
                                alt="notification"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
  
                    {/* <!-- START SUB SIDE NAV --> */}
                    <div className="d-block d-sm-none">
                      <ul className="nav row text-center">
                        <li className="nav-item col-12 py-2">
                          <NavLink
                            exact
                            to={navHome}
                            className="nav-link side-card nunito-grey "
                          >
                            <img
                              src={images["dashboard.svg"]}
                              className="text-left img-1-1rem"
                              alt="dashboard"
                            />
                            Dashboard
                          </NavLink>
                        </li>
                        <li className="nav-item col-12 py-2">
                          <NavLink
                            to={navTransfer}
                            className="nav-link side-card nunito-grey"
                            href="/page/search-receiver.html"
                          >
                            <img
                              src={images["transfer.svg"]}
                              className="text-left img-1-1rem"
                              alt="transfer"
                            />
                            Transfer
                          </NavLink>
                        </li>
                        <li className="nav-item col-12 py-2">
                          <NavLink to={navTopup} className="nav-link side-card nunito-grey" href="#">
                            <img
                              src={images["top-up.svg"]}
                              className="pr-2 img-1-1rem"
                              alt="topup"
                            />
                            Top Up
                          </NavLink>
                        </li>
                        <li className="nav-item col-12 py-2">
                          <NavLink to={navProfile} className="nav-link side-card nunito-grey" href="#">
                            <img
                              src={images["profile.svg"]}
                              className="pr-2 img-1-1rem"
                              alt="profile"
                            />
                            Profile
                          </NavLink>
                        </li>
                        <li className="nav-item col-12">
                          <a className="nav-link nunito-grey" href="login.html">
                            <img
                              src={images["log-out.svg"]}
                              className="pr-2 img-1-1rem"
                              alt="logout"
                            />
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- END SUB SIDE NAV --> */}
                  </div>
                </div>
              </nav>
            </div>
            {/* <!-- END NAV --> */}
          </div>
        </>
      );
}

export default Nav
