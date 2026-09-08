import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import CardGroup from 'react-bootstrap/CardGroup';
import Button from "react-bootstrap/Button";


function App() {
  return (
    <>
      <div>
      <Navbar bg="black" data-bs-theme="dark" >
        <Container>
          <img width={"165px"} src="https://images-beta.tossdown.com/site/65b73fb7-2706-4440-87b9-9555fcd0ba80.webp" alt="" />
          <Nav className="ma-auto align-items-center">
            <Nav.Link className = "me-end ms-5" href="#home">Home</Nav.Link>
            <Nav.Link className = "me-end ms-5" href="#About Us">About Us</Nav.Link>
            <Nav.Link className = "me-end ms-5" href="#Publications">Publications</Nav.Link>



            <button style={{margin : "10px" , borderRadius : "50px" , background : "black" , height: "50px"}}>Get a Franchies</button>
            <button style={{margin:"10px" , borderRadius : "50px" , background : "red" , border : "red" , height : "50px" }}>Order Online</button>

        
          </Nav>
        </Container>
      </Navbar>

<div className="bg-black text-white">
       <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img width={"100%"} src="https://static.tossdown.com/images/a540d7af-570b-4136-aee3-080ea4928f88.webp" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img width={"100%"} src="https://static.tossdown.com/images/48530090-fbc2-414f-9028-05086a940b88.webp" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img width={"100%"} src="https://static.tossdown.com/images/577429c2-3b58-4be5-a56a-d1453922516f.webp" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>




<h1 style={{textAlign : "center", marginTop : "30px"}}>Welcome To SaltnPepper</h1>
<h2 style={{textAlign : "center", marginTop : "30px"}}>Restaurants! Our Brands</h2>

<p style={{textAlign : "center", marginTop : "30px"}}>Please click our brands below for further information, reservations or to order online!</p>
   


<div style={{display : "flex" ,  justifyContent : "center" , alignItems : "center" , gap : "20px"}}>
 <CardGroup style={{gap : "30px"}}>
      <Card>
        <Card.Img variant="top" src="https://static.tossdown.com/site/8a66dd76-03d2-4b71-8d03-cf045f0248a7.webp" />
       </Card>


      <Card>
        <Card.Img variant="top" src="https://static.tossdown.com/site/9d9cb355-ac8c-404e-a608-c28242343cd1.webp" />
           </Card>
    

      <Card>
        <Card.Img variant="top" src="https://static.tossdown.com/site/f9238d0e-7c34-4139-a081-c57b7713628e.webp" />
        </Card>

  
  <Card>
        <Card.Img variant="top" src="https://static.tossdown.com/images/38f64422-c79a-4650-8df2-5668743154df.webp" />
       </Card>
 

 </CardGroup>
     </div>

     <div style={{display : "flex" ,  justifyContent : "center" , alignItems : "center" , gap : "170px"}}>
   <Button variant="dark" style={{margin : "10px" , borderRadius : "50px" , background : "black" , height: "50px"}}>
    Order Now
  </Button>

    <Button variant="dark" style={{margin : "10px" , borderRadius : "50px" , background : "black" , height: "50px"}}>
    Order Now
  </Button>

    <Button variant="dark" style={{margin : "10px" , borderRadius : "50px" , background : "black" , height: "50px"}}>
    Order Now
  </Button>

    <Button variant="dark"
    style={{margin : "10px" , borderRadius : "50px" , background : "black" , height: "50px"}}>
    Order Now
  </Button>
     </div>
</div>

     </div>


    </>
)
}

 

export default App;