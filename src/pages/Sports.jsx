import { useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";


export default function Sports(){
    const [page,setPage] = useState('Sports')
    return(<>
        <Header/>
            <h1>{page} Page</h1>
        <Footer/>
    </>)
}