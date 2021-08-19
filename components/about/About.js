import Image from "next/dist/client/image";
//import aboutImage from '../../public/assets/images/banners/about.webp'
const About=()=>{
    return(<>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                      <Image src="/assets/images/banners/about.webp" alt="about" width="450"height="400"/>
                    </div>
                    <div className="col-md-6">
                    <div className="pl-0 pl-lg-3 pl-xl-5">   
                    <div className="d-grid gap-3">

                    <div className="p-2 bg-white border">Grid item 1</div>
                    <div className="p-2 bg-white border">Grid item 2</div>
                    <div className="p-2 bg-white border">Grid item 3</div>
                    <div className="p-2 bg-white border">Grid item 1</div>
                    <div className="p-2 bg-white border">Grid item 2</div>
                    <div className="p-2 bg-white border">Grid item 3</div>

                    </div>
                    </div>
                    </div>
                </div>
            </div>
           </>
        )
}
export default About;