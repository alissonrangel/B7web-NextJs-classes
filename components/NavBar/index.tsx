import Link from 'next/link';
import { ReactElement } from 'react';
import { navigationLinks } from '../../utils/data';
import styles from './NavBar.module.css';

type Props = {
  children: ReactElement;
}

const NavBar = () => {
  const data = navigationLinks;
  return (
    <ul className={styles.container}>
      {navigationLinks.map((item, index) => (
        <li key={index} className={styles.linkItem}>
          <Link href={`/${item.path}`}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavBar;