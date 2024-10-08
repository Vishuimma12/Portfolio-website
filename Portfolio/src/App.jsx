import React, { useEffect } from 'react';
import './App.css';
import About from './Components/About';
import Hireme from './Components/Hireme';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Service from './Components/Service';

function App() {
  useEffect(() => {
    const preventHorizontalScroll = (e) => {
      if (e.touches) {
        if (e.touches.length > 1) {
          e.preventDefault();
        }
      } else {
        if (e.deltaX !== 0) {
          e.preventDefault();
        }
      }
    };

    document.body.addEventListener('wheel', preventHorizontalScroll, { passive: false });
    document.body.addEventListener('touchmove', preventHorizontalScroll, { passive: false });

    return () => {
      document.body.removeEventListener('wheel', preventHorizontalScroll);
      document.body.removeEventListener('touchmove', preventHorizontalScroll);
    };
  }, []);

  return (
    <>
      <Navbar/>
      <Landing/>
      <Hireme/>
      <About/>
      <Service/>
      <Project/>
      
    </>
  )
}

export default App
