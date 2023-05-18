import styles from './Header.module.scss'
import Link from 'next/link';

import { useContext } from 'react';
import AppContext from "/src/appContext";

export default function Header(props) {
  const context = useContext(AppContext);
  const isDay = context.isDay;
  const setDay = context.setDay;
  const isMobile = context.isMobile;

  return (
    <div className={`${styles.menu} ${isMobile && styles['menu--mobile']}`}>
      <Link href="/">
        <span className={`${"material-symbols-rounded"} ${styles.menu__icon} ${isDay && styles['menu__icon--day']}`}>
          home
        </span>
      </Link>
      <button className={`${styles.dark_mode} ${isDay && styles['dark_mode--day']}`} onClick={() => setDay(!isDay)}>
        {isDay?
          <span className={`${"material-symbols-rounded"} ${styles.dark_mode__icon}`}>
            dark_mode
          </span>
        :
        <span className={`${"material-symbols-rounded"} ${styles.dark_mode__icon}`}>
          sunny
        </span>
        }
      </button>
    </div>
  )
}
