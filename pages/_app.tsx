import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

//primeiro a ser executado
//neste componente eu altero o que eu quero que sirva para todo o projeto
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // )
}

export default MyApp
