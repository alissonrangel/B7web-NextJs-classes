import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { Post } from '../../types/Post';

type Props = {
  post: Post;
}


const BlogItem = ({post}: Props) => {

  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <h1>Blog {id}</h1>
      <h2>a{post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}

export const getStaticPaths = async () => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts: Post[] = await res.json();

  const paths = posts.map(post => ({ 
    params: { 
      id: post.id.toString()
    }
  }));

  return { paths, fallback: false }; //true, false => se não tá na lista: 404, 'blocking'

}

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {

  const { id } = context.params as IParams
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await res.json();

  return {
    props: {
      post
    },
    revalidate: 10 //7200 segundos - 2 horas
  }
}

export default BlogItem;