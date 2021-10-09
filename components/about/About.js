import Image from "next/dist/client/image";
import { Col, Container, Row } from "react-bootstrap";
import aboutImage from '../../public/assets/images/banners/about.png'
const About=()=>{
    return(<>
            <Container>
                <Row>
                    <Col md={6}>
                      <div className="about-image-container">
                       <Image src={aboutImage} width="400"height="400" />
                      </div>
                    </Col>
                    
                    <Col md={6}>
                       <div className="about-text-container">
                          <h1>Sitaram Yadav</h1>
                           <p>
                             Sitaram Yadav is an indian Advocate. He has completed his Master in Law from Oriental University,Indore. He practising in  the Damoh District Court .
                           </p>
                       </div>
                    </Col>
                </Row>
            </Container>
           </>
        )
}
export default About;