import { Navbar,Nav,Container } from "react-bootstrap";
import Image from 'next/dist/client/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faSearch } from '@fortawesome/free-solid-svg-icons'

const Header=()=>{
    return(<>
          <header>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
            <Navbar.Brand href="#home">
             <Image src="/logo/logo1.png" alt="logo" width={160} height={50}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
               
                </Nav>
                <Nav>
                <Nav.Link href="#deets">
                <FontAwesomeIcon icon={faSearch} className="text-white"/>

               </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                <FontAwesomeIcon icon={faUser} className="text-white"/>

                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
         </Navbar> 
          </header>
         
          </>)

}
export default Header;