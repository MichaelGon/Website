import React, { useEffect, useState }  from "react";
import Footer from "../footer";
import Header from "../header";
import AutoPage from './components/auto_page'
import { useParams } from "react-router-dom";

const Order = () => {
    const [aut_list, setAut_List] = useState([]);
    const { ind } = useParams();

    console.log(ind)

    useEffect(() => {
        ; (async () => {
            const data = await fetch('http://localhost:3001/help_autos')
            const autos = await data.json()
            setAut_List(autos)
        })()
    }, [])

    const auto = aut_list[ind]

    if (!auto) { return <div>loading...</div> }

    return (
        <>
            <div className='page'>
                <Header />
                <AutoPage id={aut_list[ind] ? aut_list[ind]["id"] : null} title={aut_list[ind] ? aut_list[ind]["title"] : null} photo={aut_list[ind] ? aut_list[ind]["imageUrl"] : null} cost={aut_list[ind] ? aut_list[ind]["cost"] : null} engine={aut_list[ind] ? aut_list[ind]["engine"] : null} modification={aut_list[ind] ? aut_list[ind]["modification"] : null} configuration={aut_list[ind] ? aut_list[ind]["configuration"] : null} />
            </div>
            <Footer />
        </>
    )
}

export default Order