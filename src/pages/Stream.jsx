import { useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

export default function Stream(){
    const [page,setPage] = useState('Stream')
    return(
        <>
            <Header/>
            <h1>{page} Page</h1>
            <Footer/>
        </>
    )
}