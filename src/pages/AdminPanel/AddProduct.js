import React, { useState } from 'react';
import './AddProducts.scss';

import Logo from '../../assets/логотип 3.png';

const AddProduct = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [promoution, setPromoution] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
<section>
    <div className="container">
        <div className="add__container">
            <form className="add__product-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add category" className="add__category" value={category} onChange={(e) => setCategory(e.target.value)}/>
            <input type="text" placeholder="Add title" className="add__title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Add price" className="add__price" value={price} onChange={(e) => setPrice(e.target.value)}
            />
            <input type="text" placeholder="Add description" className="add__description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="text" placeholder="Add old price" className="add__sale" value={salePrice} onChange={(e) => setSalePrice(e.target.value)}/>
            <input type="text" placeholder="Add promoution" className="add__promoution" value={promoution} onChange={(e) => setPromoution(e.target.value)}/>

            <input type="file" className="add__image" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
            <label htmlFor="add__image">Select image</label>

            <button type="submit" className="button__add"> добавить продукт</button>
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