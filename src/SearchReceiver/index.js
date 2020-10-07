import React,{useState,useEffect} from 'react'
import SearchModule from './SearchReceiver'
import '../assets/css/search-receiver.css'

const Search = (props) => {
    const [q, setQ] = useState([]);
    const images = props.data[0];
    const id = props.data[5];
    // console.log(q)
    return (
        

        <div className="col-12 col-md-8 p-4 mt-1  pb-5 pl-5 pt-4 card-zwallet h-100">
                <div className="h6">Search Receiver</div>
                {/* <p>{q}</p> */}
                <input onChange={(e)=>setQ(e.target.value)} className="form-control form-search row my-3" type="text" placeholder="Search" aria-label="Search" />
              
                <SearchModule images={images} q={q} id={id} />
        </div>
    )
}

export default Search
