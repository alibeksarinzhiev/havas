import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './login.scss'

import axios from "axios";
import {useSelector} from "react-redux";

const Login = () => {
    const {data} = useSelector((state)=>state.products)

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [user,setUser] = useState({})

 // Проверяем, есть ли данные в localStorage
 useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        setUser(JSON.parse(storedUser));
    }
}, []);
    

    const login = (e)=>{
        e.preventDefault()
        const loginUser = {
            email,
            password
        }

        axios.post('http://localhost:8080/login', loginUser)
        .then(({ data }) => {
            setUser(data);
            // Сохраняем данные пользователя в localStorage
            localStorage.setItem('user', JSON.stringify(data));
        });
}

    return (
        <section>
            <div className="container">
            <Link to = "/">НАЗАД</Link>
                <form onSubmit={(e)=>login(e)} action="">

                    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Введите email'/>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='Введите пароль'/>
                    <button>войти</button>
                </form>
                <Link to='/register'>Зарегистрироваться</Link>
                <h2>name:{user.user?.userName}</h2>

                <div>
                    {data.map((el)=>(
                    <div key={el.id}>
                        <h2>{el.title}</h2>
                    </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Login;