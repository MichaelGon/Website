import React from "react";
import Footer from "../footer";
import Header from "../header";
import Contact_us from './components/contact_text'
import '../footer/components/Header.css'

const Contact = () => {
    return (
        <>
            <div className='page'>
                <Header />
                <Contact_us />
            </div>
            <Footer />
        </>
    )
}

export default Contact