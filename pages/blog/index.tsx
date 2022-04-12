import { Post } from "../../types/Post";

type Props = {
  name: string;
  posts: Post[];
}

const Blog = ({name, posts}: Props) => {
  return (
    <>
      <h1>Blog {name}</h1>

      {
        posts.map((item) => (
          <h2 key={item.id}><a href={`/blog/${item.id}`}>{item.title}</a></h2>
        ))
      }
    </>
  )
}

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const posts: Post[] = await res.json();

  return {
    props: {
      name: 'Rangel',
      posts
    },
    revalidate: 7200 //7200 segundos - 2 horas
  }
}

export default Blog;