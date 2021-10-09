import { Card } from "react-bootstrap";
import Image from "next/dist/client/image";
const BlogSlide=({banner})=>{
    return(<>
           
           <div className="blog-slide">
               <Card className="bg-dark text-white">
                <Image className="slide-image" src ={banner} alt="banner1" width="860"height="600"  />
                <Card.ImgOverlay>
                    <Card.Title> </Card.Title>
                    <Card.Text>
                   </Card.Text>
                    <Card.Text>
                    </Card.Text>
                </Card.ImgOverlay>
                </Card>
               
               </div>
                

            
           
           </>)
}
export default BlogSlide;