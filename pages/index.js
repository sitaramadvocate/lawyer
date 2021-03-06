import Head from 'next/head'
import Image from 'next/image'
import MainSlider from '../components/mainSlider/MainSlider'
import styles from '../styles/Home.module.css'
import About from '../components/about/About'
import Blog from '../components/blog'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sitaram Yadav</title>
        <meta name="description" content="Advocate" />
        <link rel="icon" href="/logo.png" />

      </Head>
        <section>
          <MainSlider />
          </section>
          <section className="main-strip"></section>
        <section className="about-mt">
           
            <About />
            
        </section>

        <section>
          <Blog />
        </section>
       
     
    </div>
  )
}
