import { useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";


export default function Activities(){
    const [page,setPage] = useState('Activities')
    return(<>
        <Header/>
            <h1>{page} Page</h1>
            <div className="login-wrapper">
                <form className="login-card" onSubmit={handleLogin}>
                    <h2>Welcome Back</h2>
                    
                    <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Login</button>
                    <p className="note">New here? Create an account.</p>
                </form>
            </div>
        <Footer/>
    </>)
}