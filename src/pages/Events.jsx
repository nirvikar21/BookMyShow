import { useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";


export default function Events(){
    const [page,setPage] = useState('Events')
    return(<>
        <Header/>
            <h1>{page} Page</h1>
        <Footer/>
    </>)
}