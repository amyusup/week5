import React from 'react'
import {Link} from 'react-router-dom'

const Profile = (props) => {
    const images = props.data[0]
    const name = props.data[1]
    const photo =""+ props.data[2]
    const phone = props.data[3]
    const id = props.data[5]
    const navPersonalInfo = "/personal-info/" + id
    const navChangePassword = "/change-password/" + id
    return (
        <div
          class="col-12 col-md-8 p-4 mt-1 pb-0 pl-5 pt-3 mb-1 card-zwallet h-100"
        >
          <div class="d-flex flex-column align-items-center my-2">
            <img
              class="avatar-zwallet"
              src={images[photo]}
              alt="user"
            />
            <a class="btn bg-transparent">
              <div class="small">
                <img
                  class="icon-small"
                  src={images["pencil.svg"]}
                  alt="edit"
                />
                &nbsp;Edit
              </div>
            </a>
            <div class="h5 nunito-grey">{name}</div>
            <div class=" nunito-grey">{phone}</div>
          </div>
          
         
          <Link to={navPersonalInfo} class="btn bg-grey-md-zwallet row d-flex w-75 mx-auto p-3 radius-10 my-3">
              <div class="">Personal Information</div> 
              <div class="ml-auto mr-2"><img
                class="icon-md"
                src={images["arrow-left.svg"]}
                alt="arrow"
              /></div>
            </Link>
          <Link to={navChangePassword} class="btn bg-grey-md-zwallet row d-flex w-75 mx-auto p-3 radius-10 my-3">
              <div class="">Change Password</div> 
              <div class="ml-auto mr-2"><img
                class="icon-md"
                src={images["arrow-left.svg"]}
                alt="arrow"
              /></div>
            </Link>
          <button class="btn bg-grey-md-zwallet row d-flex w-75 mx-auto p-3 radius-10 my-3">
              <div class="">Change PIN</div> 
              <div class="ml-auto mr-2"><img
                class="icon-md"
                src={images["arrow-left.svg"]}
                alt="arrow"
              /></div>
            </button>
          <button class="btn bg-grey-md-zwallet row d-flex w-75 mx-auto p-3 radius-10 my-3">
              <div class="">Logout</div> 
              <div class="ml-auto mr-2"><img
                class="icon-md"
                src={images["arrow-left.svg"]}
                alt="arrow"
              /></div>
            </button>
         
        </div>
    )
}
export default Profile
