import { useEffect } from "react"
import { useState } from "react";
import { data } from "react-router-dom";
function home() {

    const [product,setProduct]=useState([])

    useEffect(() => {
        getProduct()
    }, [])


    const getProduct = () => {
        fetch("https://fakestoreapi.com/products/")
            .then((res) => res.json())
            .then((data)  =>{
 setProduct((data))
 console.log(data)
            })   
    }
    return (     
      <div>
<h1>Home</h1>
      {product.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img
            src={item.image}
            alt={item.title}
            width="200"
          />
          <p>Price: {item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
       
      
        </div>
    )
}

export default home;
