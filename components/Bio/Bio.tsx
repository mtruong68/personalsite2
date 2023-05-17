import styles from './Bio.module.scss'
import { useContext } from 'react';
import AppContext from "/src/appContext";

export default function Bio(props) {
  const context = useContext(AppContext);
  const isDay = context.isDay;
  return (
    <div className={`${styles.bio} ${isDay && styles['bio--day']} ${props.down && styles['bio--down']} ${props.show && styles['bio--show']}`}>
      <button onClick={props.closeBio} className={styles.close}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.59 251.59">
          <circle className={`${styles.close__bg} && ${isDay && styles['close__bg--day']}`} cx="125.79" cy="125.79" r="125.29"/>
          <rect className={`${styles.close__line}`} x="117.78" y="35.06" width="16.03" height="181.47" rx="7" ry="7" transform="translate(-52.11 125.79) rotate(-45)"/>
          <rect className={`${styles.close__line}`} x="35.06" y="117.78" width="181.47" height="16.03" rx="7" ry="7" transform="translate(-52.11 125.79) rotate(-45)"/>
        </svg>
      </button>
      <div className={styles.ascii}>
        <div>
        |￣￣￣￣￣￣|<br/>
        |  WHO AM  |<br/>
        |    I?    |<br/>
        |＿＿＿＿＿＿|<br/>
        (\__/) ||<br/>
        (•ㅅ•) ||<br/>
        / 　 づ
        </div>
      </div>
      <p>
        Mary is a developer, artist, and writer. She believes in the value of aesthetic experiences. She is currently working at PNC Bank in Pittsburgh in their technology development program. She worked at pill & pillow studio in Hong Kong as a front-end developer. This is the rest of her resume. She has experience with modern JS frameworks, responsive web design, WCAG accessibility, SQL, and Python. She aspires to make weird(ly moving) artworks. You can contact her at mtruong68@gmail.com.
      </p>
    </div>
  )
}
