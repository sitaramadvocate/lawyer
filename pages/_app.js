import Layout from '../layout/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
          <Layout>
             <Component {...pageProps} />
          </Layout>
         )
       
}

export default MyApp
