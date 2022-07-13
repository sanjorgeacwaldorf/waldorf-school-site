import React, {useState, useEffect} from 'react';

import Landing from './components/landing/Landing'
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About"
import About2 from "./components/about2/About2"
import Info from "./components/info/Info"
import Footer from "./components/footer/Footer"
import Donate from "./components/donate/Donate"

import './App.css';

function App() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    }, [scrollHeight])

    
  return (
    <div className='App'>
        <Navbar IsScrolling={scrollHeight}/>
        <Landing />
        <About />
        <Info />
        <About2 />
        <Donate />
        <Footer />
    </div>
  );
}

export default App;
