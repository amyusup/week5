import React from 'react'
import { NavLink} from 'react-router-dom'

const Sidebar = ({images,id}) => {
    const navHome = "/home/" + id
    const navTransfer = "/transfer/" + id
    const navTopup = "/topup/" + id
    const navProfile = "/profile/" + id
    return(
        <>
           {/* <!-- START SIDE NAV --> */}
          <div className="col-12 col-md-2 d-none d-sm-block px-0 mb-1 mr-3 py-3 card-zwallet ">
            <ul className="nav flex-column">
              <li className="nav-item pb-2 py-2">
                <NavLink exact to={navHome} className="nav-link side-card nunito-grey" >
                  <img src={images["dashboard.svg"]} className="px-2 img-1-1rem" alt="dashboard" />
                  Dashboard</NavLink>
              </li>
              <li className="nav-item py-2">
                <NavLink to={navTransfer} className="nav-link side-card nunito-grey" >
                  <img src={images["transfer.svg"]} className="px-2 img-1-1rem" alt="transfer" />
                  Transfer</NavLink>
              </li>
              <li className="nav-item py-2">
                <NavLink to={navTopup} className="nav-link side-card nunito-grey" href="#">
                  <img src={images["top-up.svg"]} className="px-2 img-1-1rem" alt="topup" />
                  Top Up</NavLink>
              </li>
              <li className="nav-item py-2">
                <NavLink to={navProfile} className="nav-link side-card nunito-grey" href="#">
                  <img src={images["profile.svg"]} className="px-2 img-1-1rem" alt="profile" />
                  Profile</NavLink>
              </li>
              <li className="nav-item bottom mb-4 px-2">
                <a className="nav-link nunito-grey" href="login.html">
                  <img src={images["log-out.svg"]} className="pr-2 img-1-1rem" alt="logout" />
                  Logout</a>
              </li>
            </ul>
          </div>
          {/* <!-- END SIDE NAV --> */}
          </>
      )
}

export default Sidebar  
