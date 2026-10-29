// import './App.css'
// import flowerImg from "./assets/img/flowerImg.jfif"






// function App() {

//   const fullName = "Kashaf Nadeem"

//   const myFunction = (a) => {
//     console.log("Running..." , a)
//   }

//   return (

//     <div className='main'>

//       <h1>My Section</h1>

//     <h1 style={{background: "black" , textAlign : "center"}}>Hello World</h1>

//     <img width={"100%"} src = {flowerImg} alt="" />

// <h1 style={{background : "yellow" , textAlign : "center"}}>{fullName}</h1>

// <button onClick={() => myFunction("Kashaf")}>Click</button>




//     </div>


//   )
//   }

// export default App;

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import Carousel from 'react-bootstrap/Carousel';

// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

// import Table from 'react-bootstrap/Table';





// function myApp() {
//   return (
//     <div>
//     <Navbar expand="lg" className="bg-warning">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//  <Carousel>
//       <Carousel.Item>
//         {/* <ExampleCarouselImage text="" /> */}
//         <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqH5zsaOoSqQndZKc3fmGoYwm-1Iekn6dcHzfqOnHvw&s=10" alt="" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     <Carousel.Item>
//         {/* <ExampleCarouselImage text="" /> */} 
//         <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXt7x9uvJ_W-Gm7h47t7FiTDGjPpTXuHarKQmTygG4Rg&s=10" alt="" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <ExampleCarouselImage text="" /> */}
//         <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5DXXVxVhWYB3DVWQMHw6wUX2bt7iRB45iKSDITUbvg&s=10" alt="" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

//      <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//       </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>


// <div style={{margin : "30px" , marginLeft : "30px" , display : "flex" , justifyContent : "center"}}>
//  <CardGroup style={{width : "100%" , gap : "30px"}}>
//       <Card>
//         <Card.Img variant="top" src="data:image/jpeg;base64,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" />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>
//           Lay Out Pizza Base.

//           </Card.Text>
//         </Card.Body>

//       </Card>
//       <Card>
//         <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMjUcRbQhjuLOItprFRG0OdOApEO71c2QKcU1C4OF3w&s" />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>
//            Lay Out Pizza Base.
//           </Card.Text>
//         </Card.Body>

//       </Card>
//       <Card>
//         <Card.Img variant="top" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8fDA%3D" />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>
//      Lay Out Pizza Base.
//           </Card.Text>
//         </Card.Body>

//       </Card>
//     </CardGroup>
//     </div>

// <div >

//      <Table striped bordered hover size="sm">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>kashaf</td>
//           <td>khan</td>
//           <td>@kashaf Nadeem</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>munaza</td>
//           <td>khan</td>
//           <td>@munaza faisal</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td>amina</td>
//           <td>khan</td>
//           <td>@amina shahzaman</td>
//         </tr>
//       </tbody>
//     </Table>

//       </div>
//       </div>
//   );
// }

// 


// import SaltinPepper from "./Components/SaltinPepper";

// function App() {
//   return (
//     <div>
//     {/* //   <Header />

//     //   <div>Hello World</div>


//     //   <MaterialCard/>

//     //   <Footer /> */}


// <SaltinPepper/>


// </div>
//   );
// }



// export default App;



// import React from 'react';
// import { Button, Checkbox, Form, Input } from 'antd';

// import { Space } from "antd";

// import { QRCode } from "antd";
// import AntdLayout from './Components/AntdLayout';







// const onFinish = values => {
//   console.log('Success:', values);
// };
// const onFinishFailed = errorInfo => {
//   console.log('Failed:', errorInfo);
// };

// const App = () => {

//   const [text, setText] = React.useState('https://ant.design/');


//   return (
//     <>
//       {/* <Form
//         name="basic"
//         labelCol={{ span: 8 }}
//         wrapperCol={{ span: 16 }}
//         style={{ maxWidth: 600 }}
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[{ required: true, message: 'Please input your username!' }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: 'Please input your password!' }]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item name="remember" valuePropName="checked" label={null}>
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>

//         <Form.Item label={null}>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form> */}

//       {/* <Space vertical align="center">
//         <QRCode value={text || '-'} />
//         <Input placeholder="-" maxLength={60} value={text} onChange={e => setText(e.target.value)} />
//       </Space> */}

//       <AntdLayout />

//     </>
//   );
// };


// function Header(props){
//   console.log(props.FullName);


// return (
//   <div>
//     <h1>Header{props.FullName}</h1>
//   </div>

// )
// }

// function Footer (){
//   return (
//     <div>
//       <h1>Footer</h1>
//     </div>
//   )
// }


// function App (){

// const FullName = "Kashaf Khan"
//   return (
//     <div>
//       {/* <h1>{Full Name}</h1> */}

//       <Header FullName = {FullName}/>
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam nesciunt, rerum suscipit cum animi ex tempora reiciendis ducimus corporis necessitatibus laboriosam impedit dolores modi optio hic harum tempore. Adipisci, ducimus!

//     <img src="data:image/jpeg;base64,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" alt="" />

//     <Footer/>
//     </p>
//     </div>
//   )
// }



// export default App;



// import { useState } from "react";

// function App (){
//   const [name , setName] = useState ("Kashaf")

// return (
//   <div>
//     <h1>{name}</h1>

//     <button onClick={() => setName ("Kashaf Nadeem")}>Change Name </button>
//   </div>
// )

// }


// export default App;


// import { useState , UseEffect } from "react"
// import Todo from "./Components/Todo"

// import Counter from "./Counter";
// import { AppRouter } from "react-router-dom";

import { useEffect, useState } from "react";
import AppRouter from "./router";
import UserContext from "./Context/UserContext";
import ProductContext from "./Context/ProductContext";

function App() {



  const [count, setCount] = useState(0)

  const [allUser, setAllUser] = useState(["kashaf" , "adnan" , "haris"])

  const AllProduct = [
    {
      id:1,
      title : "Iphone",
      description : "An iPhone is a line of touchscreen smartphones designed, developed, and marketed by Apple Inc. running the proprietary iOS operating system",
      image : "https://images.olx.com.pk/thumbnails/651095454-600x450.webp",
      Price : 2000
    },

    {
      id : 2,
      title : "watch",
      description : "A watch is a timepiece carried or worn by a person. It is designed to maintain a consistent movement despite the motions caused by the person's activities. ",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBDa8AS7SCzhv3xkIYHoW77bFtYQlVghzdbjdd_gkoQzKXfv9Ynuj7CoqH&s=10",
Price : 500 
    },

    {
      id : 3,
      title : "Car",
      description : "• Wheels and Seating: Typically features four wheels and seats between one and eight people.Primary Use: Built mainly for personal cargo",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-CEA9wWjNx2MHdIhcFynpSxA4xJpLvtyk9dQPjpN2R4RVZpRsnJmJAzm&s=10",
    Price : 20000
    },

    {
      id : 4,
      title : "Flower",
      description : "A flower is the specialized reproductive structure found in angiosperms (flowering plants). Its primary function is sexual reproduction to produce seeds and fruit.",
      image : "https://fromyouflowers.pk/wp-content/uploads/2023/12/simple-wrap.jpg",
   Price : 300
    }




  ]

  // const [Count ,setCount] = useState(0)

  // const somepeople1 = ["Adnan" , "Asdan" , "Adil"]

  // const somepeople2 = ["Kashaf" , "Mehak" , "Eman"]

  // let Allpeople =[]
  // Allpeople = [...somepeople1,...somepeople2]

  // console.log(Allpeople)



  // const [count, setCount] = useState(0)


  // useEffect(() => {
  //   console.log("Running...")
  // }, [])


  return (
    <div>


    {/* <h1 style={{color : "red" , margin : "15px"}}>Count:{Count}</h1>
//  <button style={{background : "orange" , border : "orange", margin : "5px" , borderRadius : "50px" , height : "25px"}} onClick={() => setCount(Count +1)}>Increment</button>
//  <button style={{background : "orange" , border : "orange", margin : "5px" , borderRadius : "50px", height : "25px"}} onClick={() => setCount(0)}>Reset</button>
//  <button style={{background : "orange" , border : "orange", margin : "5px" , borderRadius  : "50px" , height : "25px"}} onClick={() => setCount(Count -1)} disabled ={Count == 0}>Decrement</button>  */}




    {/* <Todo /> */}


    {/* <h1>UseEffect</h1>
// <h2>{count}</h2>


// {
//   count <= 10 ? <Counter count = {count}/> : null
// }

// <button onClick={() => setCount(count +1)}>Click</button> */}


      <UserContext.Provider value={{allUser , setAllUser}}>


<ProductContext.Provider value = {{AllProduct}}>

     <AppRouter />

</ProductContext.Provider>


</UserContext.Provider>
</div>

)
}
  export default App;