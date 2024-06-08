import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './login.scss'
import Logo from '../../assets/логотип 3.png'
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
        <section className='login__section2'>
                <div className='container'>
                    <div className='container__login-box2'>
                        <div className='login__left-side2'>
                        <h4>LogIn</h4>
                            <Link to = "/" className='button__back'>НАЗАД</Link>
                                <form onSubmit={(e)=>login(e)} action="">
                
                                    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Введите email'/>
                                    <input onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='Введите пароль'/>
                                    <button className='button__entry'>войти</button>
                                </form>
                                <Link className='forgot'>Forgot password?</Link>
                                <Link to='/register' className='button__register'>Зарегистрироваться</Link>
                                <h6>Welcome- {user.user?.userName}</h6>
                
                        </div>
    
                            <div className="login__right-side2">
                            <img className='logo' src={Logo} alt="" />
                            </div>
                    </div>
    
                                <div className='login__content'>
                                    {data.map((el)=>(
                                    <div key={el.id} >
                                        <h3>{el.title}</h3>
                                    </div>
                                    ))}        
                                </div>
                </div>
        </section>
    );
};

export default Login;