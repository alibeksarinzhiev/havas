import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation} from "react-router-dom";

const OneProduct = () => {
    let location = useLocation()
    let id =  location.pathname.split('/').at(-1)
    const [one,setOne] = useState({})
    console.log(one)

    useEffect(()=>{
        axios(`http://localhost:8080/products/${id}`)
            .then(({data})=>setOne(data))
    },[])
    return (
        <section>
            <div className="container">
                <div>
                    <h2>{one.title}</h2>
                </div>
            </div>
        </section>
    );
};

export default OneProduct;