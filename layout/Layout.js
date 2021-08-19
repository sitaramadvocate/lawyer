import { Fragment } from "react"
import Footer from "../components/layoutComponent/Footer"
import Header from "../components/layoutComponent/Header"

const Layout=({children})=>{
    return(
             <Fragment>
                 <Header />

                 <main>
                 {children}
                 </main>
                

               <Footer />
             </Fragment>

        
           )
}
export  default Layout;