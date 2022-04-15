/* eslint-disable @next/next/inline-script-id */
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import MyButton from "../../components/MyButton";
import styles from '../../styles/About.module.css';

const About = () => {

  const [isColorOrange, setIsColorOrange] = useState(true);
  return (
    <>
      <div className={styles.aboutTitle}>Page About v2</div>
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
      </ul>
      <Link href="/about/alisson" passHref>
        <a style={{color: 'red', backgroundColor: 'purple'}}>Alisson about</a>
      </Link>
      <br/>
      <Link 
        href="/about2"
        replace //padrão é o push
        scroll={false}
      >about2</Link>
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
        strategy="beforeInteractive" // afterInteractive, beforeInteractive(antes), lazyOnload, worker
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
    </>
  )
}

export default About;