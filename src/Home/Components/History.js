import React,{useEffect,useState} from 'react'
import API from '../../Axios/Api'

const History = ({id,images}) => {
    const [transfer,setTransfer] = useState([])
    useEffect(()=>{
        API.get(`transfer/${id}/4`)
        .then((res)=>{
            setTransfer(res.data.data)
            console.log(res.data.data)
        })
        .catch((err)=>console.log(err.message))
    },[])

     
    return (
        transfer.map((item) => {
            const photo = "" + item.photo;
            let color = "";
            if (item.transaction == "Transfer") {
              color = "col-4 col-md-2 col-lg-3 col-xl-4  small nunito-succes";
            } else {
              color = "col-4 col-md-2 col-lg-3 col-xl-4  small  nunito-failed";
            }
            return (
              <div className="row w-100 py-2">
                <div className="col-3 col-md-3 col-lg-4 col-xl-3 pr-0">
                  <img src={images[photo]} className="image-card" alt="user" />
                </div>
                <div className="col-5 col-md-7 col-lg-5 col-xl-5 pl-0">
                  <div>{item.name}</div>
                  <div className="small nunito-grey">{item.transaction}</div>
                </div>
      
                <div className={color}>{item.amount}</div>
              </div>
            );
          })
    )
}
export default History
