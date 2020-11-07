import { Navbar,Nav} from 'react-bootstrap';
import "../Styles/Navigation.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation(){
    return(
        <div>
            <Navbar bg="light" expand="lg">
              <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="d-flex justify-content-around"> */}
                <Nav className="ml-auto">
                  <Nav.Link className="links"  href="#home">Home</Nav.Link>
                  <Nav.Link className="links" href="#link">About Me</Nav.Link>
                  <Nav.Link className="links" href="#link">Work</Nav.Link>
                  <Nav.Link className="links" href="#link">Projects</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar> 
        </div>
    )
}

export default Navigation