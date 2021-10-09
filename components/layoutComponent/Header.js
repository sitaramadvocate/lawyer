import { Navbar,Nav,Container } from "react-bootstrap";
import Image from 'next/dist/client/image';

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
                <Nav.Link href="#deets"><i class="fas fa-search"></i></Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                <i class="fal fa-user text-white"></i>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
         </Navbar> 
          </header>
         
          </>)

}
export default Header;