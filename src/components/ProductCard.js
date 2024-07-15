import React from 'react'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';



const ProductCard = ({ data, index, setProductClicked,setSnapImage,setSnapId }) => {
  const location = useLocation()
  const pathname = location.pathname;


  

  const clickedButton = (e) => {
    if (pathname === '/' || pathname === '/products') {
      setProductClicked(true)
      setSnapImage(data.images[0])
      setSnapId(data.id)
    }
  }

  return (
    <div className="col-6 col-sm-3 mb-5" key={index}>

      <div className="card ProductCard rounded-0">
        <Link to={`/product/${data.id}`} className="cardLink" onClick={clickedButton}>
          <img
            src={data.images[0]}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title fs-6">{data.title}</h5>
            <div className="d-flex justify-content-between align-items-center">
              <span className="fs-6 fw-bold">Rs. {data.price}</span>
              <span className="text-danger fw-bold" style={{ fontSize: '11px' }}>({data.discountPercentage} % OFF)</span>
            </div>
          </div>
        </Link>
        <div className="card-footer p-0 border-top-0">
          <Link
            to={"cart"}
            className="btn w-100 rounded-0 fw-semibold"
            style={{ backgroundColor: "#FF3F6C", color: "white" }}
          >
            Add to Bag
          </Link>
        </div>
      </div>

    </div>
  )
}

export default ProductCard