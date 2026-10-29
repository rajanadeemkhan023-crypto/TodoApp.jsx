
// import { useEffect, useState } from "react";

// function Home() {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     getProduct();
//   }, []);

//   const getProduct = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         console.log(data);
//       })
//       .catch((error) => console.log(error));
//   };

//   const categories = [...new Set(product.map((item) => item.category))];

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <h1>FAKE STORE CATEGORIES</h1>

//       {categories.map((category, index) => (
//         <div
//           key={index}
//           style={{
//             padding: "15px",
//             borderRadius: "15px",
//             textAlign: "center",
//             border: "5px solid skyblue",
//             width: "80%",
//             margin: "15px auto",
//             boxSizing: "border-box",
//           }}
//         >
//           <h2>{category}</h2>

//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "center",
//               gap: "20px",
//             }}
//           >
//             {product
//               .filter((item) => item.category === category)
//               .map((item) => (
//                 <div key={item.id} style={{ width: "180px" }}>
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     style={{
//                       width: "150px",
//                       height: "150px",
//                       objectFit: "contain",
//                     }}
//                   />

//                   <h4>{item.title}</h4>
//                   <p>{item.price}</p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;



import { useEffect, useState } from "react";

function Home() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error));

    getProduct();
  }, []);

  const getProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  };

  const getCategory = (categoryName) => {
    fetch(
      `https://fakestoreapi.com/products/category/${encodeURIComponent(categoryName)}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Fake Store
      </h1>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <button
          style={styles.button}
          onClick={getProduct}
        >
          All Products
        </button>

        {categories.map((item) => (
          <button
            key={item}
            style={styles.button}
            onClick={() => getCategory(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Product Images */}
      <div style={styles.container}>
        {product.map((item) => (
          <div key={item.id} style={styles.card}>
            <img
              src={item.image}
              alt={item.title}
              style={styles.image}
            />

            <h3>{item.title}</h3>

            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  navbar: {
display : "flex",
    justifyContent: "center",
 gap :"10px",
    padding: "20px",
    backgroundColor: "black",
  },

  button: {
    padding: "10px 15px",
    cursor: "pointer",
    backgroundColor: "white",
    border: "none",
    borderRadius: "5px",

  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    padding: "20px",
  },

  card: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    boxSizing: "border-box",

  },

  image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
  },
};

export default Home;

