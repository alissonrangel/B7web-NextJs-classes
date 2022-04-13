/* eslint-disable @next/next/inline-script-id */
import Link from "next/link";
import Script from "next/script";

const About = () => {
  return (
    <>
      <div>Page About v2</div>
      <Link href="/about/alisson" passHref>
        <a>Alisson</a>
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
    </>
  )
}

export default About;