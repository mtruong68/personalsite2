import Head from 'next/head'
import Image from 'next/image'
import Header from 'components/Header/Header'
import styles from 'styles/Work.module.scss'
import { useContext } from 'react';
import AppContext from "/src/appContext";

import {workData} from 'data/work.ts';

export function getStaticPaths() {
  const paths = workData.map((p) => ({
    params: { id: p.slug },
  }));

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export function getStaticProps(context) {
  let data = workData.filter(work => work.slug === context.params.id);
  return {
    props: { data }
  }
}

export default function Work(props) {
  const pageData = props.data[0];
  const context = useContext(AppContext);
  const isDay = context.isDay;

  return (
    <>
      <Head>
        <title>marytruong.com</title>
        <meta name="description" content="Mary Truong's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <div className={`${styles.work__data} ${isDay && styles['work__data--day']}`}>
          <div>
            <h1 className={styles.data__title}>{pageData.title}</h1>
            <div className={`${styles.data__link} ${isDay && styles['data__link--day']}`}>
              <span>🔗: </span><a href={pageData.link} target="_blank">{pageData.link}</a>
            </div>
            <div className={styles.data__tech}>
              Tech: {pageData.tech}
            </div>
            <div className={styles.data__text}>
              {pageData.text}
            </div>
          </div>
        </div>
        <div className={`${styles.images} ${isDay && styles['images--day']}`}>
          <div className={styles.images__wrapper}>
            {pageData.images.map((image) => {
              return (
                <img
                  key={image}
                  className={styles.images__image}
                  src={`/images/${image}`} />
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}
