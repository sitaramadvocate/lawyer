import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import b1 from "../../public/images/blog/b1.jpg"
import b2 from "../../public/images/blog/b2.jpg"
import b3 from "../../public/images/blog/b3.jpg"
import b4 from "../../public/images/blog/b4.jpg"
import BlogSlide from "./BlogSlide";
const BlogSlider=()=>{
    var settings = {
        dots: true,
        infinite:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll:1,
        autoplay: true,
        speed:500,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(<>
           <Slider {...settings}>
             
               <BlogSlide banner={b1} />
               <BlogSlide banner={b2} />
               <BlogSlide banner={b3} />
               <BlogSlide banner={b4} />

               <BlogSlide banner={b1} />
               <BlogSlide banner={b2} />
               <BlogSlide banner={b3} />
               <BlogSlide banner={b4} />

           </Slider>
           </>)
}
export default BlogSlider;