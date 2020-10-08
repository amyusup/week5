import React,{useState,useEffect} from 'react'
// import API from '../../Axios/Api'
import Axios from 'axios'

const ChangePassword = (props) => {
  const images = props.data[0]
  const idUser = props.data[5]
  const [pass1,setPass1] = useState('')
  const [pass2,setPass2] = useState('')
  const dataInput = {password:pass1}

  const handlerSubmit = () =>{
    Axios.patch(`http://localhost:8000/users/${idUser}`, {password:'999'})
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>console.log(err.message))
  }
    return (
        <div
          class="col-12 col-md-8 p-4 mt-1 pb-0  pt-3 mb-1 card-zwallet h-100"
        >
          <div class="row font-weight-bold pl-5">Change Password</div>

          <div class="row w-50 py-3 nunito-grey pl-5">
            You must enter your current password and then type your new password
            twice.
          </div>
      
          <div class="row w-75 mx-auto input-group mt-5">
            <label for="password" class="text-white">a</label>

            <input
              type="password"
              name="password"
              id="password"
              class="form-control form-group password flat-form"
              placeholder="Currect Password"
              
            />
            <img
              src={images["eye-crossed.svg"]}
              onclick="myFunction()"
              alt="showpassword"
              class="absolute-right"
            />
          </div>
          <div class="row w-75 mx-auto input-group mt-5">
            <label for="password" class="text-white">a</label>

            <input
              type="password"
              name="password"
              id="password"
              class="form-control form-group password flat-form"
              placeholder="New Password"
              onChange={(e)=>setPass1(e.target.value)}
            />
            <img
               src={images["eye-crossed.svg"]}
              onclick="myFunction()"
              alt="showpassword"
              class="absolute-right"
            />
          </div>
          <div class="row w-75 mx-auto input-group mt-5">
            <label for="password" class="text-white">a</label>

            <input
              type="password"
              name="password"
              id="password"
              class="form-control form-group password flat-form"
              placeholder="Repeat New Password"
              onChange={(e)=>setPass2(e.target.value)}
            />
            <img
              src={images["eye-crossed.svg"]}
              onclick="myFunction()"
              alt="showpassword"
              class="absolute-right"
            />
          </div>

          <button class="btn bg-grey-md-zwallet  d-flex w-75 mx-auto p-2 radius-10 my-5" onClick={handlerSubmit}>
            <div class="d-flex mx-auto">Change Password</div> 
          </button>
        </div>
    )
}
export default ChangePassword