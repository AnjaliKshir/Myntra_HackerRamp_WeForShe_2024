import Banner from "./Banner";
import "../style/home.css";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const data1=[
  {    
  "id":31,
  "title":"Dress",
  "price":100,
  "description":"This is a beautiful dress",
  "images":["/image1.jpg","/image2.jpg"],
  "discountPercentage":10,
  "rating":5
  },
  {
  "id":32,
  "title":"Shirt",
  "price":50,
  "description":"This is a beautiful shirt",
  "images":["/image5.webp","/image6.jpg"],
  "discountPercentage":20,
  "rating":4
  },
  {
  "id":33,
  "title":"Pants",
  "price":70,
  "description":"This is a beautiful pants",
  "images":["/image9.jpeg","/image10.jpeg"],
  "discountPercentage":30,
  "rating":4
  },
  {
  "id":34,
  "title":"Shoes",
  "price":120,
  "description":"This is a beautiful shoes",
  "images":["/image13.jpeg","/image14.jpeg"],
  "discountPercentage":40,
  "rating":5
  },
  {
  "id":35,
  "title":"Hat",
  "price":30,
  "description":"This is a beautiful hat",
  "images":["/image17.jpeg","/image18.jpeg"],
  "discountPercentage":50,
  "rating":5
  },
  {
  "id":36,
  "title":"Socks",
  "price":10,
  "description":"This is a beautiful socks",
  "images":["/image21.jpeg","/image22.jpeg"],
  "discountPercentage":10,
  "rating":4
  }
]

export default function Home({setProductClicked,setSnapImage,setSnapId}) {
  const [Products, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.products);
      })
      .catch((error) => console.log(error));
  }, []);
//   console.log(Products)
  return (
    <>
      <Banner />
      <h4 className="text-center mt-5 mb-5 fw-bold">BUDGET BUYS</h4>
      <section className="container-fluid">
        <div className="row mb-5">
          {Products.map((data, index) => (
            <ProductCard data={data} index={index} key={index} setProductClicked={setProductClicked} setSnapImage={setSnapImage} setSnapId={setSnapId} />
            
          ))}
          ;
        </div>
        <div className="row mb-5">
        {
            data1.map((datas) => (
              <ProductCard data={datas} index={datas.id} key={datas.id} setProductClicked={setProductClicked} setSnapImage={setSnapImage} setSnapId={setSnapId} />
            ))
          }
        </div>
      </section>
    </>
  );
}
