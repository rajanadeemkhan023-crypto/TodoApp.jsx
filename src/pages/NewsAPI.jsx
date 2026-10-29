import { useEffect } from "react"
import { useState } from "react";
import { data } from "react-router-dom";
function Home() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    getProduct()
  }, [])


  const getProduct = () => {
    fetch("https://newsapi.org/v2/everything?q=apple&from=2026-10-25&to=2026-10-25&sortBy=popularity&apiKey=0b7ef6ad9d054e66b91e0a6c023cdd30")
      .then((res) => res.json())
      .then((data) => {
        setProduct((data.articles))
        console.log(data.articles)
      })
  }



  return (
    <div style={{  display: "flex",
  flexDirection: "column",
  alignItems: "center"}}>
      <h1>NEWS APP</h1>
      {product.map((item, index) => (
        <div key={item.id || index} style={{
          padding : "10px",
          borderRadius : "15px",
          textAlign : "center",
          border : "10px solid skyblue",
          justifyContent : "center",
          alignItems : "center",
          width : "50%",
margin: "0 auto",
boxSizing: "border-box" 
        }}>
          <h2>{item.title}</h2>
          <img
            src={item?.urlToImage}
            alt={item.urlToImage}
            width="100%"
          />
          <p>{item.description}</p>
          <br />

<a href={item.url} target="_blank" rel="noreferrer">Read More</a>
       </div>
      ))}

    </div>
  )
}

export default Home;