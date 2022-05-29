/* eslint-disable @next/next/inline-script-id */
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import Layout from "../../components/Layout";
import MyButton from "../../components/MyButton";
import styles from '../../styles/About.module.css';
import Head from 'next/head'

const About = () => {

  const [isColorOrange, setIsColorOrange] = useState(true);
  return (
    <Layout>
      <div className={styles.backabout} >
      <div className={styles.aboutTitle}>Page About v2</div>
      <Head>
        {/* <title>About</title> */}
        
        <title>Pagina sobre pastoral</title>
        <meta name="title" content="Pagina sobre pastoral" />
        <meta name="description" content="Site dedicado a pastoral dizendo sobre o que ele trata" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Pagina sobre pastoral" />
        <meta property="og:description" content="Site dedicado a pastoral dizendo sobre o que ele trata" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Pagina sobre pastoral" />
        <meta property="twitter:description" content="Site dedicado a pastoral dizendo sobre o que ele trata" />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Head>
      <ul className="lista">
        <li>
          <Link href="/about/rangel" passHref>
            Rangel
          </Link>
        </li>
        <li>
          <Link href="/about/alves" passHref>
            Alves
          </Link>
        </li>
        <li>
          <Link href="/about/escorcio" passHref>
            Escorcio
          </Link>
        </li>
      </ul>
      <Link href="/about/alisson" passHref>
        <a style={{color: 'red', backgroundColor: 'purple'}}>Alisson about</a>
      </Link>
      <br/>
      <Link 
        href="/about2"
        replace //padrão é o push
        scroll={false}
      >
        <a className="btn btn-primary">About2</a>
      </Link>
      <br/>
      <Link 
        href={{
          pathname : "/about2/[slug]",
          query : { 
            slug: "pedro",
            age: "99"
          }
        }} >about2 slug and age</Link>
      <br/>
      <MyButton label="clicar" onClick={() => { alert("clicou")}} />
      <Script 
        src="http://script.com/script.js"
        strategy="beforeInteractive" // afterInteractive (default), beforeInteractive(antes), lazyOnload, worker(em teste)
        onLoad={() => {          
          
        }}
        onError={() => {

        }}
      />
      <Script strategy="afterInteractive">
        {`window.alert('carreguei')`}
      </Script>
      <style global jsx>{`
        .lista{
          background-color: ${isColorOrange ? 'orange' : 'yellow'};
        }
        .lista li:first-child{
          border: 10px solid pink;
          font-weight: bold;
          display: inline-block;
        }
        body{
          background-color: black;
        }
      `}</style>
      </div>
    </Layout>
  )
}

export default About;