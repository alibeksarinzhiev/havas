import React, {useState} from 'react';
import './register.scss'
import Facebook from '../../assets/facebook (2).png'
import Twitter from '../../assets/twitter.png'
import Google from '../../assets/Google.png'
import Logo from '../../assets/логотип 3.png'
import axios from "axios";
import { Link} from 'react-router-dom';

const Register = () => {

const [email,setEmail] = useState('')
const [number,setNumber] = useState('')
const [password,setPassword] = useState('')
const [userName,setUserName] = useState('')

    let registerUser = ()=>{
        let user = {
            userName,
            email,
            number,
            password
        }
        axios.post('http://localhost:8080/users', user)
    }



    return (
        <section className='login'>
            <div className="container">
                <div className="login__box">
                    <div className="left__section">
                    <h5>Registration</h5>
                    <Link to = "/login">НАЗАД</Link>
                    <input onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='Enter your user name'/>
                        <input onChange={(e)=>setNumber(e.target.value)} type="text" placeholder='Enter your mobile number'/>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email'/>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter your password'/>
                        <button onClick={registerUser} className='confirm'>Confirm</button>
                        <div className="login__ways">
                            <button><img src={Google} alt="" /></button>                    
                            <button><img src={Facebook} alt="" /></button>                    
                            <button><img src={Twitter} alt="" /></button> 
                        </div>                   
                    </div>
                    <div className="right__section">
                        <img className='logo' src={Logo} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;