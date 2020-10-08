import React from 'react'

const PersonalInformation = (props) =>{
    const phone = props.data[3]
    const firstName = props.data[6]
    const lastName = props.data[7]
    const email = props.data[8]
    return (
        <div class="col-12 col-md-8 p-4 mt-1  pb-0 pl-5 pt-3 mb-1 card-zwallet h-100">
                <div class="row font-weight-bold ">Personal Information</div>
                
                <div class="row w-50 py-3 nunito-grey">
                    We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.
                </div>
                <div class="row w-100  py-3 my-2 sub-card">
                    <div class="col-8 col-md-7 col-lg-8 ">
                        <div class="nunito-grey pb-1 small">First Name</div>
                        <div class="font-weight-bold nunito-grey">{firstName}</div>
                    </div>
                </div>
                <div class="row w-100  py-3 my-2 sub-card">
                    <div class="col-8 col-md-7 col-lg-8 ">
                        <div class="nunito-grey pb-1 small">Last Name</div>
                        <div class="font-weight-bold nunito-grey">{lastName}</div>
                    </div>
                </div>
                <div class="row w-100  py-3 my-2 sub-card">
                    <div class="col-8 col-md-7 col-lg-8 ">
                        <div class="nunito-grey pb-1 small">Verified E-mail</div>
                        <div class="font-weight-bold nunito-grey">{email}</div>
                    </div>
                </div>
                <div class="row w-100  py-3 my-2 sub-card">
                    <div class="col-12 col-md-12 col-lg-12 ">
                        <div class="d-flex flex-row">
                            <div class="nunito-grey d-flex justify-content-start pb-1 small">Phone Number</div>
                            <div class="ml-auto small primary-zwallet">Manage</div>
                        </div>
                        <div class="font-weight-bold nunito-grey">{phone}</div>
                    </div>
                </div>

            </div>
    )
}
export default PersonalInformation
