import "../style/product.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";


const data1=[
  {    
  "id":"31",
  "title":"Dress",
  "price":100,
  "description":"This is a beautiful dress",
  "images":["/image1.jpg","/image2.jpg"],
  "discountPercentage":10,
  "rating":5
  },
  {
  "id":"32",
  "title":"Shirt",
  "price":50,
  "description":"This is a beautiful shirt",
  "images":["/image5.webp","/image6.jpg"],
  "discountPercentage":20,
  "rating":4
  },
  {
  "id":"33",
  "title":"Pants",
  "price":70,
  "description":"This is a beautiful pants",
  "images":["/image9.jpeg","/image10.jpeg"],
  "discountPercentage":30,
  "rating":4
  },
  {
  "id":"34",
  "title":"Shoes",
  "price":120,
  "description":"This is a beautiful shoes",
  "images":["/image13.jpeg","/image14.jpeg"],
  "discountPercentage":40,
  "rating":5
  },
  {
  "id":"35",
  "title":"Hat",
  "price":30,
  "description":"This is a beautiful hat",
  "images":["/image17.jpeg","/image18.jpeg"],
  "discountPercentage":50,
  "rating":5
  },
  {
  "id":"36",
  "title":"Socks",
  "price":10,
  "description":"This is a beautiful socks",
  "images":["/image21.jpeg","/image22.jpeg"],
  "discountPercentage":10,
  "rating":4
  }
]

function Product() {
  const [Product, setProduct] = useState([]);
  const params = useParams();
  const { id } = params;
  //   console.log(id)
  useEffect(() => {
    if(id<=30){
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        // console.log(data);
      })
      .catch((error) => console.log(error));
    }
    else if(id>30)
    {
      const data=data1.find((data)=>data.id===id);
      setProduct(data);
    }


  }, [id]);

  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  const [showElement, setShowElement] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(true);
    }, 1000);
  }, []);

  //   console.log(Product)
  return (
    <>
      <section className="pt-4 container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 imgSection pe-4">
            {showElement ? (
              <div className="row">
                <div className="col-sm-6">
                  <img src={Product.images[0]} alt="img" className="me-2 w-100" />
                </div>
                {Product.images[1] ? 
                (                
                <div className="col-sm-6">
                  <img src={Product.images[1]} alt="" className="w-100" />
                </div>):(<> </>)}

              </div>
            ) : (
              <div></div>
            )}{" "}
          </div>
          <div className="col-12 col-sm-6 p-5">
            <div className="border-bottom border-2 pb-4">
              <div className="d-flex flex-row">
              <h4>{Product.title}</h4>
              &nbsp;
              <button className="rounded bg-white">
                <a href="https://idy12345-tryon-app-h5yjcs.streamlit.app/" className="text-orange-200" target="_blank">Try-on</a>
              </button>
              </div>
              <p className="pb-2 text-secondary font-monospace">
                {Product.description}
              </p>
              <span className="border border-1 pt-1 pb-1 px-2">
                <span className="fw-bold">{Product.rating}</span>{" "}
                <i className="bi bi-star-fill text-success"></i> Rating
              </span>
            </div>
            <div className="mt-3">
              <div>
                <span className="fw-bold">Rs. {Product.price}</span>
                <span className="fw-bold text-danger ps-5">
                  ({Product.discountPercentage} % OFF)
                </span>
              </div>
              <div className="buySection mt-4">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <Link
                      to={"/cart"}
                      className="btn-myntra pt-3 pb-3 px-5 fw-bold rounded-1"
                    >
                      <i className="bi bi-bag"> </i>Add To Bag
                    </Link>
                  </div>
                  <div className="col-12 col-sm-6">
                    <Link
                      to={"/checkout"}
                      className="pt-3 pb-3 px-4 border rounded-1 fw-bold bg-body wishListBtn"
                    >
                      <i className="bi bi-heart"> </i>WISHLIST
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
      <div className="row mb-5">
      {Products.map((data, index) => (
            <ProductCard data={data} index={index} key={index} setProductClicked={false} setSnapImage={""} setSnapId={0}/>
            
          ))}
      </div>
      </section>
    </>
  );
}
export default Product;
