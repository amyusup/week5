import React, {useState, useEffect} from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import { Nav, SideBar, Footer } from "./Components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import API from './Axios/Api'
import Home from './Home'
import History from './History'
import Search from './SearchReceiver'
import InputAmount from './InputAmount'
import Topup from './Topup'
import Profile from './Profile'
import PersonalInfo from './Profile/Components/personalInformation'
import ChangePassword from './Profile/Components/ChangePassword'


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./assets/image", false, /\.(png|webp|jpe?g|svg)$/)
);

const App = () =>{
  const [userData,setUserData] = useState([])
  // let { id } = useParams();
  const path = window.location.href.split("/");
  const id = path[path.length - 1];
  useEffect(() => {
    API.get(`home/${id}`)
    .then((res)=>{
      setUserData(res.data.data[0])
      
    })
    .catch((err)=>console.log(err.message))
  },[])
 
  // console.log(userData["name"])
  // const userId = userData["id"];
const name =userData["name"] 
const photo = userData["photo"];
const phone = userData["phone"];
const balance = userData["balance"];
const firstName = userData["firstName"];
const lastName = userData["lastName"];
const email = userData["email"];
// console.log(photo);
var allData = [images, name, photo, phone, balance,id,firstName,lastName,email]; 

// console.log(photo)

  return(
    <>
      <Router>

          <div className="container-fluid fullscreen-with-footer">
            <Nav data={allData} />
            <div className="row my-5">
              <div className="col-1"></div>

              <SideBar images={images} id={id}/>
              <Switch>
                <Route exact path="/home/:id">
                  <Home data={allData} />
                </Route>
                <Route exact path="/history/:id">
                  <History  data={allData} />
                </Route>
                <Route exact path="/transfer/:id">
                  <Search data={allData} />
                </Route>
                <Route exact path="/input-amount/:sender/:receiver">
                  <InputAmount  data={allData} />
                </Route>
                <Route exact path="/topup/:id">
                  <Topup  data={allData} />
                </Route>
                <Route exact path="/profile/:id">
                  <Profile  data={allData} />
                </Route>
                <Route exact path="/personal-info/:id">
                  <PersonalInfo  data={allData} />
                </Route>
                <Route exact path="/change-password/:id">
                  <ChangePassword  data={allData} />
                </Route>
                <Route path="*">
                  {/* <NoMatch /> */}
                </Route>
              </Switch>
            </div>
          </div>
          <Footer />
        </Router>
    </>
  )
}

export default App;
