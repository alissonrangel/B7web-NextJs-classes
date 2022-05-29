import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import { Post } from "../../types/Post";

type Props = {
  name: string;
  private_name: string;
  posts: Post[];
  data2: string;
}

const Blog = ({name, posts, private_name, data2}: Props) => {

  const router = useRouter();
  
  return (

    <Layout>
      <>
      <p>{router.isFallback.toString()}</p>
      <h1>Blog {name} - {private_name} - {data2}</h1>

      {
        posts.map((item) => (
          <h4 key={item.id}><a href={`/blog/${item.id}`}>{item.title}</a></h4>
        ))
      }
      </>
    </Layout>
  )
}

//quero que seja executado uma vez só
export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const posts: Post[] = await res.json();

  const data2: Date = new Date();

  return {
    props: {
      private_name: process.env.NOME,
      name: 'Rangel',
      posts,
      data2: data2.toUTCString(),
    },
    revalidate: 7200 //segundos - 2 horas - a cada duas hora ele refaz a requisição
  }
}

export default Blog;