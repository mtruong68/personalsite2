import styles from './GradientBg.module.scss'
import { useContext } from 'react';
import AppContext from "/src/appContext";

export default function GradientBg(props) {
  const context = useContext(AppContext);
  const isDay = context.isDay;
  return (
    <div className={styles.bg}>
      <div className={styles.bg__color + ' ' + (isDay && styles["bg__color--day"])} />
      <div className={styles.bg__day + ' ' + (!isDay && styles["bg__day--hidden"])}/>
      <div className={styles.bg__night + ' ' + (isDay && styles["bg__night--hidden"])}/>
    </div>
  )
}
