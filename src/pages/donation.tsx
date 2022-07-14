import React from 'react';
import Footer from "../components/footer/Footer"
import Donate from "../components/donate/Donate"

import './donation.css';

function Donation() {
    return (
        <div className='Donation'>
            <Donate />
            <Footer />
        </div>
    );
}

export default Donation;
