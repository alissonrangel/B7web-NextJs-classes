import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AboutItem = () => {

  const router = useRouter();
  const { slug, age } = router.query;
  
  useEffect(() => {
    //router.events.on('routeChangeStart');
    router.events.on('routeChangeComplete', (url: string) => {
      console.log('nova url: ', url);      
    });

    return () => {
      router.events.off('routeChangeComplete', (url: string) => {
        alert('novaaa url: ' + url);      
      })
    }
  }, []);

  return (
    <div>
      <h1>Dinamic Page {slug} - {age} anos</h1>

      <p>Pathname: {router.pathname}</p>

      <p>isFallBack: {router.isFallback.toString()}</p>

      <button onClick={()=>{
        router.push('/about/alisson') //faz adição no historico
      }}>alisson</button>

      <button onClick={()=>{
        router.replace('/about/alisson') //não faz adição no historico, substitui a página
      }}>alisson replace</button>

      <button onClick={()=>{
        router.replace({
          pathname: '/about/[slug]',
          query: { slug: 'Pedro' }
        }) //não faz adição no historico
      }}>Pedro home page about</button>

      <button 
      onClick={()=>{
        router.push({
          pathname: '/about2/[slug]',
          query: { slug: 'Pedro' }
        }) //não faz adição no historico
      }}
      className="btn btn-primary"
      >Pedro home page about2</button>
    </div>
  )
}

export default AboutItem;