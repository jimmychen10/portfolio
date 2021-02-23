import { Navbar,Nav} from 'react-bootstrap';
import "../Styles/Navigation.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigation(){
    return(
      <Navbar className="navbar" expand="lg">
      <Navbar.Toggle className="ml-auto " aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav bg-light c-light">
          <Nav className="ml-auto ">
            <Nav.Link className="links"  href="#Home">Home</Nav.Link>
            <Nav.Link className="links" href="#AboutMe">About Me</Nav.Link>
            <Nav.Link className="links" href="#Projects">Projects</Nav.Link>
            <Nav.Link className="links" href="#Contact">Contact</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
    )
}

export default Navigation