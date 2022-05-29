- npx create-next-app --typescript
- https://jsonplaceholder.typicode.com/posts

- Rotas dinâmicas e Estáticas

#### comportamento natural do react, operações no navegador do usuário
- CSR = Client-side Rendering

#### caminha duplo, processamento no servidor e manda o resultado para o user, misto com client-side
- SSR = Server-side Rendering

#### sempre que acessar é a mesma página, pré carregamento de todas as pags possíveis, no build, gera as pags e joga no cache
- SSG = Static-side Generation

#### pode-se combinar elas em conjunto para fazer o app, dependendo do dado

#### recurso padrão do next, atualização rápida da página em modo de desenvolvimento
- Fast Refresh


#### variáveis de ambiente
.env.local
.env.development
.env.production
.env
```
NEXT_PUBLIC_NOME=AlissonAlves
NOME=AlissonRangel => acessado no servidor
``` 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


#### scripts externos
```
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
```

#### useRouter
```
const router = useRouter();
const slug = router.query.slug;
return (
<>
  <p>Pathname: {router.pathname}</p>
  <p>{router.isFallback.toString()}</p>

  <button onClick={() => router.push('/about/alisson') }>alisson</button>

  {/* substitui no histórico a nova página */}
  <button onClick={() => router.replace('/about/alisson') }>alisson</button>
</>
)
```

- npm install bootstrap

#### SEO com o site metatags.io
- https://metatags.io/
- páginas estáticas e dinâmicas
```
<Head>
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
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
