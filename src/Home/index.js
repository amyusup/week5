import React from 'react'
import {Link} from 'react-router-dom'
import History from './Components/History'

const Home = (props) => {
  console.log(props)
    const images = props.data[0];
    const phone = props.data[3];
    const balance = props.data[4];
    const id = props.data[5];
    const navHistory = "/history/" + id


    const currency = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(balance);


    return (
        <>
          <div className="col-12 col-md-8">
            {/* <!-- START CARD ATAS --> */}
  
            <div className="row bg-primary-zwallet card-zwallet mt-2 p-4 pb-0 pl-5 pt-3">
              <div className="col-7  col-md-9">
                <div>Balance</div>
                <div className="h4 my-2"> {currency}</div>
                <div className="small">{phone}</div>
              </div>
              <div className="col-12 col-md-3">
                <div>
                  <form action="search-receiver.html">
                    <button
                      type="submit"
                      className="btn bg-grey-zwallet ml-auto mr-3 my-2 w-100"
                    >
                      <img
                        src={images["transfer-grey.svg"]}
                        alt="transfer"
                        className="left img-1-1rem px-4"
                      />
                      <div className="small text-center px-0">Transfer</div>
                    </button>
                  </form>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn bg-grey-zwallet ml-auto mr-3 w-100"
                  >
                    <img
                      src={images["top-up-grey.svg"]}
                      alt="transfeq"
                      className="left img-1-1rem px-4"
                    />
                    <div className="small text-center px-0">Top Up</div>
                  </button>
                </div>
              </div>
            </div>
  
            {/* <!-- END CARD ATAS --> */}
            <div className="row mt-3">
              <div className="col-12 col-md-12 col-lg-7 mr-3 card-zwallet">
                <div className="row">
                  <div className="col">
                    <img
                      src={images["income.svg"]}
                      alt="income"
                      className="pt-4 pb-1 pl-2"
                    />
                    <div className="text-left">Income</div>
                    <div className="h4 text-left">Rp2.120.000</div>
                  </div>
                  <div className="col">
                    <img
                      src={images["expense.svg"]}
                      alt="income"
                      className="pt-4 pb-1 pl-2"
                    />
                    <div className="text-left">Expense</div>
                    <div className="h4 text-left">Rp2.120.000</div>
                  </div>
                </div>
                <canvas id="myChart" className=""></canvas>
              </div>
              <div className="col card-zwallet p-3">
                <div className="d-flex flex-row">
                  <div className="p-2">Transaction History</div>
                  <div className="p-2 ml-auto">
                    <Link to={navHistory} className="primary-zwallet" >
                      See all
                    </Link>
                  </div>
                </div>
               
                <History id={id} images={images}/>
              </div>
            </div>
          </div>
        </>
      );
}
export default Home
