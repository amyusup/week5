import React, { useEffect, useState } from "react";
import API from "../Axios/Api";
import { Link } from "react-router-dom";

const Search = (props) => {
  const { images, q, id } = props;
  const navInputAmount = `/input-amount/${id}/`;
  const [search, setSearch] = useState([]);
  useEffect(() => {
    if (search) {
      API.get(`users/search?name=${q}`)
        .then((res) => {
          setSearch(res.data.data);
          // console.log(res.data.data);
        })
        .catch((err) => console.log(err.message));
    }
  }, [q]);

  if (search.length < 1) {
    return (
      <div className=" w-100  py-3 my-5  sub-card text-center">
        User Not Found
      </div>
    );
  } else {
    return (
      <div className="height-60" >
        {search.map((item) => {
          const photo = "" + item.photo;
          const id = "" + item.id;
          return (
            <Link
              to={navInputAmount + id}
              className="row w-100  py-3 mb-3 sub-card zwallet-link"
              href="input-amount-blank.html"
            >
              <div className="col-4 col-md-3 col-lg-2 pr-0 ">
                <img src={images[photo]} className="image-card" alt="user" />
              </div>
              <div className="col-8 col-md-7 col-lg-8 pl-0 pt-2">
                <div>{item.name}</div>
                <div className="small nunito-grey">{item.phone}</div>
              </div>
            </Link>
          );
        })}
        
      </div>
    );
  }
};
export default Search;
