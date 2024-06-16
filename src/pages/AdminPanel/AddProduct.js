import React, { useState } from 'react';
import './AddProducts.scss';
import axios from "axios";
import {useSelector} from "react-redux";

import Logo from '../../assets/логотип 3.png';

const AddProduct = () => {

    const {data} = useSelector((state)=>state.products)

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [sale, setSale] = useState('');
  const [promoution, setPromoution] = useState('');
  const [image, setImage] = useState(null);

  const product = (e)=>{
    e.preventDefault()
    const newProduct = {
        category,
        title,
        price,
        description,
        sale,
        promoution,
        image
    }
    axios.post('http://localhost:8080/products', newProduct)
}

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
<section>
    <div className="container">
        <div className="add__container">
            <form className="add__product-form" onSubmit={handleSubmit}>
            <input onChange={(e)=>setCategory(e.target.value)} type="text" placeholder="Add category" className="add__category"/>
            <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Add title" className="add__title"/>
            <input onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Add price" className="add__price" />
            <input onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Add description" className="add__description" />
            <input onChange={(e)=>setSale(e.target.value)} type="text" placeholder="Add old price" className="add__sale" />
            <input onChange={(e)=>setPromoution(e.target.value)} type="text" placeholder="Add promoution" className="add__promoution" />

            <input type="file" className="add__image" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
            <label htmlFor="add__image">Select image</label>

            <button  onClick={product} type="submit" className="button__add"> добавить продукт</button>
        </form>

        <div className="login__right-side2 login__right-add">
            <img className="logo" src={Logo} alt="" />
        </div>
    </div>
</div>
    </section>
);
};

export default AddProduct;