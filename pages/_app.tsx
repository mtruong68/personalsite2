import '@/styles/_general.scss'
import type { AppProps } from 'next/app'
import throttle from 'lodash.throttle';
import { createContext, useState, useEffect } from "react"
import AppContext from 'src/appContext';

export default function App({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState(null);
  const [isDay, setIsDay] = useState(true);
  const [windowWidth, setWindowWidth] = useState(null);
  const delay = 150;

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setWindowWidth(window.innerWidth)
    let vh = window.innerHeight * 0.01;

    const handleResize = () => {
      let vh = window.innerHeight * 0.01;
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 768){
        setIsMobile(true);
      } else if (window.innerWidth > 768){
        setIsMobile(false);
      }
    };
    const throttledHandleResize = throttle(handleResize, delay);
    window.addEventListener('resize', throttledHandleResize);
    return () => {
      window.removeEventListener('resize', throttledHandleResize);
    }
  }, []);

  return (
  <AppContext.Provider value={{isMobile: isMobile, windowWidth: windowWidth, isDay: isDay, setDay: (state) => setIsDay(state)}}>
      <Component
        {...pageProps}
      />
  </AppContext.Provider>
  )
}
