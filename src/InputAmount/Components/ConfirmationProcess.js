import React from "react";


const ConfirmationProcess = (props) => {
  const {
    success,
    amount,
    balanceLeft,
    date,
    notes,
    images,
    photo,
    name,
    phone,
  } = props;
  let successImage;
  if(success==true){
    successImage = "success.svg"
  }else{
    successImage = "failed.svg"

  }
  return (
    <div class="col-12 col-md-8 p-4 mt-1 pb-0 pl-5 pt-3 mb-1 card-zwallet h-100">
      <div class="d-flex justify-content-center">
        <img src={images[successImage]} alt="succes" />
      </div>
      <div class="font-weight-bold text-center">Transfer Success</div>
      <div class="row w-100 py-2 my-2 sub-card">
        <div class="col-8 col-md-7 col-lg-8">
          <div class="nunito-grey">Amount</div>
          <div class="font-weight-bold">{amount}</div>
        </div>
      </div>
      <div class="row w-100 py-2 my-2 sub-card">
        <div class="col-8 col-md-7 col-lg-8">
          <div class="nunito-grey">Balance Left</div>
          <div class="font-weight-bold">{balanceLeft}</div>
        </div>
      </div>
      <div class="row w-100 py-2 my-2 sub-card">
        <div class="col-8 col-md-7 col-lg-8">
          <div class="nunito-grey">Date & Time</div>
          <div class="font-weight-bold">{date}</div>
        </div>
      </div>
      <div class="row w-100 py-2 my-2 sub-card">
        <div class="col-8 col-md-7 col-lg-8">
          <div class="nunito-grey">Notes</div>
          <div class="font-weight-bold">{notes}</div>
        </div>
      </div>
      <div class="font-weight-bold">Transfer To</div>
      <div class="row w-100 py-2 my-2 sub-card">
        <div class="col-4 col-md-3 col-lg-2 pr-0">
          <img src={images[photo]} class="image-card" alt="user" />
        </div>
        <div class="col-8 col-md-7 col-lg-8 pl-0 pt-2">
          <div>{name}</div>
          <div class="small nunito-grey">{phone}</div>
        </div>
      </div>

      <div class="form-row mt-5">
        <div class="col-0 col-md-0 col-lg-3"></div>
        <button
          type="button"
          class="btn bg-secondary-zwallet radius-12 ml-auto mr-3 col-12 col-md-12 col-lg-1 my-1"
        >
          <img
            src={images["share.svg"]}
            alt="download"
            class="img-1-1rem"
          />
        </button>
        <button
          type="button"
          class="btn bg-secondary-zwallet radius-12 ml-auto mr-3 col-12 col-md-12 col-lg-3 my-1"
        >
          <img
            src={images["download.svg"]}
            alt="download"
            class="img-1-1rem left px-1"
          />

          <div class="small text-center">Download PDF</div>
        </button>
        <button
          type="button"
          class="btn bg-primary-zwallet radius-12 ml-auto mr-3 col-12 col-md-12 col-lg-3 my-1"
          onclick="window.location.assign('home.html'); "
        >
          <div class="small text-center px-0">Back to Home</div>
        </button>
      </div>
    </div>
  );
};

export default ConfirmationProcess;
