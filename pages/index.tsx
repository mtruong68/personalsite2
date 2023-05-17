import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/Home.module.scss'
import {useState, useEffect, useContext, useRef, memo} from 'react';
import AppContext from "/src/appContext";

import {workItems, artItems} from 'data/index.ts';
import Sun from 'components/sun'
import Bio from 'components/Bio/Bio'
import ParticleBg from 'components/ParticleBg/ParticleBg'
import GradientBg from 'components/GradientBg/GradientBg'
import HeroAnimation from 'components/HeroAnimation/HeroAnimation'

const MemoParticleBg = memo((props) => ParticleBg(props));

export default function Home() {
  const context = useContext(AppContext);
  const isDay = context.isDay;
  const setDay = context.setDay;
  const [canRotate, setCanRotate] = useState(true);
  const [isRotating, setIsRotating] = useState(true);
  const [bioDown, setBioDown] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [isWork, setIsWork] = useState(true);
  const [navItems, setNavItems] = useState(workItems);

  const changeItems = (items, workState) => {
    setNavItems(items);
    setIsWork(workState);
  }

  const wheelContainer = useRef();
  const rotatePosition = useRef(0);
  const interval = useRef();

  useEffect(() => {
    if (isRotating) {
      let speed = .03;
      interval.current = setInterval(() => {
        rotatePosition.current = (rotatePosition.current + speed) > 360 ? 0 : rotatePosition.current + speed;

        if (wheelContainer.current){
          wheelContainer.current.style.transform =
            `rotate(${rotatePosition.current}deg)`;
        }
      }, 1000 / 80)
    } else {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }, [ isRotating ]);

  const setRotate = (state) => {
    if (canRotate){
      setIsRotating(state);
    }
  }


  return (
    <>
      <Head>
        <title>marytruong.com</title>
        <meta name="description" content="Mary Truong's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <GradientBg />
        <Bio down={bioDown} show={showBio} closeBio={() => {setShowBio(false)}}/>
        <HeroAnimation />
        <MemoParticleBg />
        <div className={styles.main__container}>
          <h1 className={`${styles.main__title} ${isDay && styles['main__title--day']}`}>Mary Truong</h1>
          <button className={`${styles.main__button} ${isDay && styles['main__button--day']}`}
            onMouseOver={() => {setBioDown(true)}}
            onMouseOut={() => {setBioDown(false)}}
            onClick={() => {setShowBio(true)}}
          >
            About
          </button>
        </div>

        <div className={`${styles['wheel-container']}`} ref={wheelContainer}>
          <nav className={styles.wheel}>
            <ul className={styles.wheel__list}>
              {navItems.map((item, i) => {
                return (
                  <li key={item.title}
                  className={`${styles.wheel__item}`}
                  >
                    <Link
                      href={item.href}
                      className={`${styles.wheel__link} ${isDay && styles['wheel__link--day']}`}
                      onMouseOver={() => {setRotate(false)}}
                      onMouseOut={() => {setRotate(true)}}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <nav>
          <ul className={`${styles.nav} ${isDay && styles['nav--day']}`}>
            <li
              onClick={() => {changeItems(artItems, false)}}
              className={`${styles.nav__item} ${!isWork && styles['nav__item--selected']}`}
            >
              <button>ART</button>
            </li>
            <li
              onClick={() => {changeItems(workItems, true)}}
              className={`${styles.nav__item} ${isWork && styles['nav__item--selected']}`}
            >
              <button>WORK</button>
            </li>
            <li
              onClick={() => setDay(!isDay)}
              className={styles.nav__item}
            >
              {isDay?
                <button>
                  <span className="material-symbols-rounded">
                    dark_mode
                  </span>
                </button>
              :<button>
              <span className="material-symbols-rounded">
                sunny
              </span>
              </button>
              }
            </li>
          </ul>
        </nav>
      </main>
    </>
  )
}
