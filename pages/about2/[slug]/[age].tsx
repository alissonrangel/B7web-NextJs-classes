import { useRouter } from 'next/router';

const Age = () => {

  const router = useRouter();
  const {slug, age} = router.query;
  
  return (
    <div>{slug} tem {age} anos</div>
  )
}

export default Age;