import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../../components/Layout';

const AboutItem = () => {

  const router = useRouter();
  const slug = router.query.slug;
  
  useEffect(() => {
    
    //vou mudar de rota
    router.events.on('routeChangeStart', (url: string) => {
      console.log('routeChangeStart indo para a rota: ', url);      
    })

    //mudei de rota, todo vez que mudar de rota ele é executado
    router.events.on('routeChangeComplete', (url: string) => {
      console.log('routeChangeComplete indo para a rota: ', url);
    })

    return () => {
      router.events.off('routeChangeComplete', (url: string) => {
        console.log('routeChangeComplete2 indo para a rota: ', url);
      })
    }
  },[])
  return (
    <Layout>
      <>
        <div>Dinamic Page {slug}</div>
        <p>Pathname: {router.pathname}</p>
        <p>{router.isFallback.toString()}</p>

        <button onClick={() => router.push('/about/alisson') }>alisson</button>

        <button onClick={() => router.push({
              pathname: '/about/[slug]',
              query: { slug: 'Pedro' }
              }
            ) }>Pedro</button>

        {/* substitui no histórico a nova página */}
        <button onClick={() => router.replace('/about/alisson') }>alisson</button>
      </>
    </Layout>
  )
}

export default AboutItem;