import React  from "react";
import Footer from "../footer";
import Header from "../header";
import Text from './components/text'
import '../footer/components/Header.css'

const Info = () => {
    return (
        <>
            <div className='page'>
                <Header />
                <Text />
            </div>
            <Footer />
        </>
    )
}

export default Info