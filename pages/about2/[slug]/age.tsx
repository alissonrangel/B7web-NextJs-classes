import { useRouter } from 'next/router';

const Age = () => {

  const router = useRouter();
  const slug = router.query.slug;
  
  return (
    <div>{slug} tem 90 anos</div>
  )
}

export default Age;