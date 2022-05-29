import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { navigationLinks } from '../../utils/data';
import styles from './NavBar.module.css';

type Props = {
  children: ReactElement;
}

const NavBar = () => {
  
  const router = useRouter();

  const pathName = router.pathname;

  const data = navigationLinks;

  const verifyActiveLink = (path: string) => {  
    
    if (path === '/' && pathName !== '/') {
      return styles.linkItem
    }
    
    const params = pathName.split('/')
    console.log('pathname: ', pathName);
    
    console.log('params : ', params);
    
    console.log('path subs : ', path.substring(1));
    
    if (params[1] === path.substring(1)) {
      return styles.linkActive
    } else {
      return styles.linkItem
    }
  }

  return (
    <ul className={styles.container}>
      {navigationLinks.map((item, index) => (
        <li key={index} className={ verifyActiveLink(item.path)}>
          <Link href={`/${item.path}`}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavBar;