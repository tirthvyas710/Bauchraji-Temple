import { useState, useEffect } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Mute from './Components/Mute';
import Page1 from './Components/Page1';
import Banner from './Components/Banner';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';
import Greetings from './Components/Greetings';

function App() {
  const [showSite, setShowSite] = useState(false); // State to control visibility

  useEffect(() => {
    // Check if the user has already entered the site
    const audioEnabled = localStorage.getItem('audioEnabled') === 'true';
    if (audioEnabled) {
      setShowSite(true);
    }
  }, []);

  const handleEnterSite = () => {
    localStorage.setItem('audioEnabled', 'true'); // Save user interaction
    setShowSite(true); // Show the main site
  };

  return (
    <>
      {!showSite ? (
        <Greetings onEnterSite={handleEnterSite} /> // Show Greetings first
      ) : (
        <>
          <Mute />
          <Nav />
          <Page1 />
          <Banner />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
        </>
      )}
    </>
  );
}

export default App;
