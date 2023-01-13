import './App.css';
import { Navbar, Container, Nav, NavDropdown, button, Carousel, Row, Col, Image, Button, Card, Alert, Accordion, Figure } from 'react-bootstrap';
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
                <Nav.Link href="#link">LinkExample2</Nav.Link>
                <Nav.Link href="#link">LinkExanple3</Nav.Link>
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
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGlhbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGlhbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1612016410921-264f6afed556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBpYW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col sm={5}>

              <h1 class="">My music</h1>
              <p class="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
              <Button variant="outline-primary"> call to action</Button>

            </Col>

          </Row>

          <Row>
            <Col>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col>

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
          <>
            {[
              'dark',
            ].map((variant) => (
              <Alert key={variant} variant={variant}>
                This is a {variant} alert with{' '}
                <Alert.Link href="https://open.spotify.com/artist/0uo5SLiIan9YDCQWy20wyV?si=1PqVGGF8TPqQBfjOy6SObQ">an example link</Alert.Link>. Give it a click if
                you like.
              </Alert>
            ))}
          </>
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
