import React from 'react'
import OrderWeek from './Components/Order'

const History = (props) => {
    const images = props.data[0];
    const id = props.data[5];
    // console.log(images)
    return (
        <div className="col-12 col-md-8 p-4 mt-1 mb-1 py-5 card-zwallet">
                <div className="h6 "> Transaction History</div>
                <div className=" nunito-grey py-3">
                    This Week
                </div>
                
                <OrderWeek images={images} id={id} order="WEEK"/>
                <div className=" nunito-grey py-2">
                    This Month
                </div>

                <OrderWeek images={images} id={id} order="MONTH"/>
            </div>
    )
}

export default History
