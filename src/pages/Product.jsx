
import { useContext } from "react";
import ProductContext from "../Context/ProductContext";

function Product() {
  const { AllProduct } = useContext(ProductContext);

  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          color: "blue",
          marginBottom: "30px",
        }}
      >
        Our Products
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
      
        }}
      >
        {AllProduct.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              width: "250px",
              boxShadow: "0 2px 8px #ddd",
              boxSizing: "border-box",
            }}
          >
            <h2>{item.title}</h2>

            <p>
              {item.description || "Best quality product"}
            </p>

            <img
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
              }}
              src={item.image}
              alt={item.title}
            />

            <h3>Price: Rs. {item.Price}</h3>

            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
