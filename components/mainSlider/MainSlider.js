import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/dist/client/image";
import  '../../styles/Home.module.css'
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import b2 from "../../public/assets/images/banners/b3.png"
import { Card } from "react-bootstrap";
const MainSlider=()=>{

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        centerPadding: "265px",
        slidesToShow: 1,
        focusOnSelect: true,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                centerPadding: "50px",
   
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding: "5px",
               
  
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return(<>
           
        <div className="home-slider">
          <Slider {...settings}>
          <div className="slide-container">
         
           
            <Card className="bg-dark text-white">
            <Image className="slide-image" src ={b2} alt="banner1" width="860"height="500"  />
              <Card.ImgOverlay>
                <Card.Title></Card.Title>
                <Card.Text>
                 
                 </Card.Text>
                <Card.Text></Card.Text>
              </Card.ImgOverlay>
            </Card>
                
          </div>
    
          <div className="slide-container">
         
           
         <Card className="bg-dark text-white">
         <Image className="slide-image" src ={b2} alt="banner1" width="860"height="500"  />
           <Card.ImgOverlay>
             <Card.Title></Card.Title>
             <Card.Text>
              
              </Card.Text>
             <Card.Text></Card.Text>
           </Card.ImgOverlay>
         </Card>
             
       </div>
      

       <div className="slide-container">
         
           
            <Card className="bg-dark text-white">
            <Image className="slide-image" src ={b2} alt="banner1" width="860"height="500"  />
              <Card.ImgOverlay>
                <Card.Title></Card.Title>
                <Card.Text>
                 
                 </Card.Text>
                <Card.Text></Card.Text>
              </Card.ImgOverlay>
            </Card>
                
          </div>
         

          <div className="slide-container">
         
           
            <Card className="bg-dark text-white">
            <Image className="slide-image" src ={b2} alt="banner1" width="860"height="500"  />
              <Card.ImgOverlay>
                <Card.Title></Card.Title>
                <Card.Text>
                 
                 </Card.Text>
                <Card.Text></Card.Text>
              </Card.ImgOverlay>
            </Card>
                
          </div>
    
        
        </Slider>
      </div>
            
           </>
         )
}
export default MainSlider;