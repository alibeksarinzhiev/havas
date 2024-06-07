import React, {useEffect, useState} from 'react';
import './login.scss'
import axios from "axios";
import {useSelector} from "react-redux";

const Login = () => {
    const {data} = useSelector((state)=>state.products)

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [user,setUser] = useState({})

    const login = (e)=>{
        e.preventDefault()
        const loginUser = {
            email,
            password
        }

        axios.post('http://localhost:8080/login',loginUser)
            .then(({data})=>setUser(data))
    }


    return (
        <section>
            <div className="container">
                <form onSubmit={(e)=>login(e)} action="">

                    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Введите email'/>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='Введите пароль'/>
                    <button>войти</button>
                </form>
                <h2>name:{user.user?.email}</h2>

                <div>
                    {data.map((el)=>(
                        <h2>{el.title}</h2>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Login;