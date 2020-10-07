import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import API from "../Axios/Api";
import "../assets/css/input-amount.css";
import ProcessPage from "./Components/ConfirmationProcess";

const InputAmount = (props) => {
  const path = window.location.href.split("/");
  const id = path[path.length - 1];
  const images = props.data[0];
  const balance = props.data[4];
  const idSender = props.data[5];
  const [receiver, setReceiver] = useState([]);
  const [confirmation, setConfirmation] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [idReceiver, setIdReceiver] = useState("");
  const [success, setSuccess] = useState(null);
  const [otp, setOtp] = useState("");
  var today = new Date();
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var timeOption = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const date =
    today.toLocaleString("en-US", options) +
    " - " +
    today.toLocaleTimeString([], timeOption);

  useEffect(() => {
    API.get(`/users/${id}`)
      .then((res) => {
        setReceiver(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  // const  temp = receiver[0]
  // const idReceiver = temp["id"]
  // console.log(temp)
  const dataInput = {
    idSender: idSender,
    idReceiver: idReceiver,
    amount: amount,
    notes: notes,
  };
  var handlerSubmit = () => {
    API.post("/transfer", dataInput)
      .then((res) => {
        // console.log(res.data.succes)
        setSuccess(res.data.succes);
      })
      .catch((err) => console.log(err.message));
  };

  var handleChange = otp => setOtp( otp );
  let confirmProcess = (success) => {
    if (success == true) {
      console.log("success");
    } else if (success == false) {
      console.log("failed");
    }
    return (
      <ProcessPage
        success={success}
        amount={amount}
        balanceLeft={balance - amount}
        date={date}
        notes={notes}
        images={images}
        photo={photo}
        name={name}
        phone={phone}
      />
    );
  };

  let input = () => {
    return receiver.map((item) => {
      //   console.log(item)
      return (
        <div className="col-12 col-md-8 ">
          <div className=" p-4 mt-1  pb-0 pl-5 pt-3 mb-1 card-zwallet ">
            <div className="font-weight-bold ">Transfer Money</div>
            <div className="row w-100  py-2 my-4 sub-card">
              <div className="col-4 col-md-3 col-lg-2 pr-0 ">
                <img
                  src={images[item.photo]}
                  className="image-card"
                  alt="user"
                />
              </div>
              <div className="col-8 col-md-7 col-lg-8 pl-0 pt-2">
                <div>{item.name}</div>
                <div className="small nunito-grey">{item.phone}</div>
              </div>
            </div>
            <div className="p nunito-grey ">
              Type the amount you want to transfer and then
              <br />
              press continue to the next steps.
            </div>
            <div className=" text-center pt-4 my-0 ">
              <label htmlFor="idr" className="nunito-transparent">
                .
              </label>
              <input
                type="number"
                className="form-control flat-form text-center nunito-grey idr mx-auto"
                name="idr"
                id="idr"
                placeholder="0.00"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="font-weight-bold text-center">
              {balance} Available
            </div>
            <div className=" text-center nunito-grey pt-3 my-2 mx-5 ">
              <label htmlFor="notes" className="nunito-transparent">
                .
              </label>
              <input
                type="text"
                name="notes"
                id="notes"
                className="form-control flat-form  form-amount-blank"
                placeholder="Add some notes"
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button
                onClick={() => {
                  setConfirmation(!confirmation);
                  setName(item.name);
                  setPhone(item.phone);
                  setPhoto(item.photo);
                  setIdReceiver(item.id);
                }}
                type="submit"
                className="btn bg-primary-zwallet mr-3 px-4 py-2 mt-3 "
              >
                <div className="small text-center px-0">Continue</div>
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  let confirm = () => {
    console.log(name);
    if (success !== null) {
      return confirmProcess(success);
    } else {
      return (
        <>
          <div class="col-12 col-md-8 p-4 mt-1  pb-0 pl-5 pt-3 mb-1 card-zwallet h-100">
            <div class="font-weight-bold ">Transfer To</div>
            <div class="row w-100  py-2 my-2 sub-card">
              <div class="col-4 col-md-3 col-lg-2 pr-0 ">
                <img src={images[photo]} class="image-card" alt="user" />
              </div>
              <div class="col-8 col-md-7 col-lg-8 pl-0 pt-2">
                <div>{name}</div>
                <div class="small nunito-grey">{phone}</div>
              </div>
            </div>
            <div class="font-weight-bold">Details</div>
            <div class="row w-100  py-2 my-2 sub-card">
              <div class="col-8 col-md-7 col-lg-8 ">
                <div class="nunito-grey ">Amount</div>
                <div class="font-weight-bold ">{amount}</div>
              </div>
            </div>
            <div class="row w-100  py-2 my-2 sub-card">
              <div class="col-8 col-md-7 col-lg-8 ">
                <div class="nunito-grey ">Balance Left</div>
                <div class="font-weight-bold ">{balance - amount}</div>
              </div>
            </div>
            <div class="row w-100  py-2 my-2 sub-card">
              <div class="col-8 col-md-7 col-lg-8 ">
                <div class="nunito-grey ">Date & Time</div>
                <div class="font-weight-bold ">{date}</div>
              </div>
            </div>
            <div class="row w-100  py-2 my-2 sub-card">
              <div class="col-8 col-md-7 col-lg-8 ">
                <div class="nunito-grey ">Notes</div>
                <div class="font-weight-bold ">{notes}</div>
              </div>
            </div>
            {/* <!-- Button trigger modal --> */}
            <div class="d-flex justify-content-end">
              <button
                type="button"
                data-toggle="modal"
                data-target="#confirmation-pin"
                class="btn bg-primary-zwallet  mr-3 px-4 py-2 mt-3 "
              >
                <div class="small text-center px-0">Continue</div>
              </button>
            </div>
          </div>

          <div
            class="modal fade "
            id="confirmation-pin"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered " role="document">
              <div class="modal-content zwallet-modal p-2">
                <div class="modal-header border-0">
                  <h6 class="modal-title pb-0" id="exampleModalLongTitle">
                    Enter PIN to Transfer
                  </h6>
                  <button
                    type="button"
                    class="close "
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body pt-0">
                  <div class="small nunito-grey">
                    Enter your 6 digits PIN for confirmation to continue
                    transferring money.
                  </div>
                  <form onSubmit={handlerSubmit}>
                    <div class="d-flex ">
                    <div class="flex-column  my-5">
                    <OtpInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={6}
                        separator={<span>&nbsp;</span>}
                        isInputNum={true}
                        inputStyle="w-100 form-control "
                      />
                        {/* <input
                          id="codeBox1"
                          type="number"
                          maxlength="1"
                          onkeyup="onKeyUpEvent(1, event)"
                          onfocus="onFocusEvent(1)"
                          class="form-control text-center"
                          placeholder="_"
                        /> */}
                      </div>
                      
                    </div>
                  </form>
                  <div class="modal-footer border-0">
                    <button
                      type="submit"
                      class="btn bg-primary-zwallet w-30 ml-auto mr-3"
                      onClick={handlerSubmit}
                      data-dismiss="modal"
                    >
                      <div class="small text-center px-0">Continue</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  if (confirmation == false) {
    return input();
  } else {
    return confirm();
  }
};
export default InputAmount;
