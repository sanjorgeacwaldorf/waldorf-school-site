import React, {useState, useEffect} from 'react';

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer"
import Donate from "../components/donate/Donate"

import './donation.css';

function Donation() {
    const [scrollHeight, setScrollHeight] = useState(0);
    return (
        <div className='App'>
            <Donate />
            <Footer />
        </div>
    );
}

export default Donation;
