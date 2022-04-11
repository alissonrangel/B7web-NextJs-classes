import { useRouter } from 'next/router';

const AboutItem = () => {

  const router = useRouter();
  const slug = router.query.slug;
  
  return (
    <div>Dinamic Page {slug}</div>
  )
}

export default AboutItem;