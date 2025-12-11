import { useState } from 'react';
import './Login.css';
import Footer from "../common/Footer";
import Header from "../common/Header";
import { loginUser } from '../api/userApi';
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async(e) => {
        try{
            e.preventDefault();
            const response = await loginUser({ username, password })
            const {user,accessToken,refreshToken}=response.data.data;
            localStorage.setItem('accessToken',accessToken);
            localStorage.setItem('refreshToken',refreshToken);
            //axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
            navigate("/profile");
            
        }catch(error){
            console.log(error)
        }
    };
    return(
        <>
            <Header/>
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
        </>
    )
}