import React, { useState, useEffect } from "react";
import API from "../Axios/Api";

const Topup = () => {
  const [dataTopup, setDataTopup] = useState([]);
  useEffect(() => {
    API.get("/topup")
      .then((res) => {
        // console.log(res.data.data);
        setDataTopup(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="col-12 col-md-8 p-4 mt-1 pb-0 pl-5 pt-3 mb-1 card-zwallet height-80">
      <div className="font-weight-bold mb-4">How To Top Up</div>
      {dataTopup.map((item) => {
        return (
          <div className="d-flex flex-row p-4 sub-card my-3">
            <div className="primary-zwallet p font-weight-bold mr-3">{item.step}</div>
            <div>{item.instructions}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Topup;
