import React,{useEffect,useState} from 'react'
import API from '../../Axios/Api'

const History = ({id, images,order}) => {
    const [history,setHistory] = useState([])
    useEffect(()=>{
        API.get(`transfer/${id}?order=${order}`)
        .then((res)=>{
            setHistory(res.data.data)
            console.log(res.data.data)
        })
        .catch((err)=>console.log(err.message))
    },[])

     
    return (
        history.map((item) => {
            const photo = "" + item.photo;
            let color = "";
            if (item.transaction == "Transfer") {
              color = "col-2 col-md-2 col-lg-2 p-2 nunito-succes small";
            } else {
              color = "col-2 col-md-2 col-lg-2 p-2 nunito-failed small";
            }
            return (
              <div className="row w-100  py-2">
                    <div className="col-3 col-md-3 col-lg-2 pr-0">
                        <img src={images[photo]} className="image-card" alt="user" />
                    </div>
                    <div className="col-7 col-md-7 col-lg-8 pl-0 ">
                        <div>{item.name}</div>
                        <div className="small nunito-grey">Transfer</div>
                    </div>
                    <div className={color}>
                    {item.amount}
                    </div>
                </div>
            );
          })
    )
}
export default History
