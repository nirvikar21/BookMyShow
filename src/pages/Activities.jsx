import { useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";


export default function Activities(){
    const [page,setPage] = useState('Activities')
    return(<>
        <Header/>
            <h1>{page} Page</h1>
        <Footer/>
    </>)
}