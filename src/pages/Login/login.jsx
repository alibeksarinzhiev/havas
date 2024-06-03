import React from 'react';
import './Login.scss'
import Facebook from '../../assets/facebook (2).png'
import Twitter from '../../assets/twitter.png'
import Google from '../../assets/Google.png'
import Logo from '../../assets/логотип 3.png'

const Login = () => {
    return (
        <section className='login'>
            <div className="container">
                <div className="login__box">
                    <div className="left__section">
                        <input type="text" placeholder='Enter your mobile number'/>
                        <input type="text" placeholder='Enter your password'/>
                        <p>Forgot password?</p>
                        <button className='confirm'>Confirm</button>
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

export default Login;