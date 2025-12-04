import { useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
export default function Buzz(){
    const [page,setPage] = useState('Buzz')
    return(
        <>
            <Header/>
                <h1>{page} Page</h1>
            <Footer/>
        </>
    )
}