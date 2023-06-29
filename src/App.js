import './css/App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Routing from './components/Routing';
import Footer from './components/Footer';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > scrollPosition && isNavOpen) {
        setIsNavOpen(!isNavOpen);
      }
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, isNavOpen]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const navElement = document.getElementById('nav');
    if (navElement) {
      const newNavHeight = navElement.offsetHeight;
      setNavHeight(newNavHeight);
      console.log(scrollPosition);
    }
  }, [windowWidth, isNavOpen, scrollPosition]);

  const contentStyles = {
    marginTop: navHeight > 0 ? `${navHeight + 5}px` : 0,
  };

  return (
    <>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
      <div className="content" style={contentStyles}>
        <Routing />
      </div>
      <Footer />
    </>
  );
}

export default App;