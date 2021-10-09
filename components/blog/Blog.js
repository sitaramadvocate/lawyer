import { Container, Row } from "react-bootstrap";
import BlogSlider from "./BlogSlider";
const Blog=()=>{
    return(<>
          <Container>
              <h1 className="text-white">News&Article</h1>
              <Row>
                 <BlogSlider />
                 
              </Row>
          </Container>
          </>);
}
export default Blog;