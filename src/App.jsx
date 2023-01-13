import './App.css';
import {Navbar, Container,Nav,NavDropdown,button,Row,Col, Image, Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {

  return (
    <div className="app">
    <header>
    <Navbar bg="dark" variant='dark' expand="lg">
    <Container>
      <Navbar.Brand href="#home">Jhonatan Hadjez</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </header>
  
  <main>
<Container>
      <Row className='px-4 my-5'>
        <Col sm={7}>
        <Image 
         src="https://www.w3schools.com/bootstrap/paris.jpg
         " 
         fluid
         className= "" ></Image>
         </Col>
        <Col sm={5}>
          <h1 class = "">My music</h1>
          <p class = "mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
             the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
           <Button variant="outline-primary"> call to action</Button>  
        </Col>
      </Row>
      <Row>
        <Card className="text-center bg-secondary text-white my-5 py-4">
          <Card.Body>
            This card is the body of my cards
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.w3schools.com/bootstrap/sanfran.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.w3schools.com/bootstrap/sanfran.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.w3schools.com/bootstrap/sanfran.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
</main>
<footer class="py-5 my-5 bg-dark">
  <div class="container px-4 px-lg-5">
    <p class="m-0 text-center text-white">
      Copyright: Sami Edreai
    </p>
  </div>
</footer>
</div>
  );
}

export default App;
