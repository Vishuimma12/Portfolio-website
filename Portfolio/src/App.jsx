import React, { useEffect } from 'react';
import './App.css';
import About from './Components/About';
import Hireme from './Components/Hireme';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Service from './Components/Service';

function App() {
  useEffect(() => {
    const preventHorizontalScroll = (e) => {
      if (e.touches) {
        // For touch devices
        if (e.touches.length > 1) {
          e.preventDefault();
        }
      } else {
        // For mouse
        if (e.deltaX !== 0) {
          e.preventDefault();
        }
      }
    };

    // Prevent horizontal scroll
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
      
    </>
  )
}

export default App
