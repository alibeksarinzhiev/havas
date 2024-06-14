import React from 'react';
import './AddProducts.scss'

import Logo from '../../assets/логотип 3.png'

const AddProduct = () => {
    return (
        <section>
          
                <div className="container">
                <div className='add__container'>
                    <form className='add__product-form' action="">
                    <input type="text" placeholder='Add category' className ='add__category'/>
                    <input type="text" placeholder='Add title' className ='add__title'/>
                    <input type="text" placeholder='Add price' className ='add__price'/>
                    <input type="text" placeholder='Add description' className ='add__description'/>
                    <input type="text" placeholder='Add old price' className ='add__sale'/>
                    <input type="text" placeholder='Add promoution' className ='add__promoution'/>
                
                    <input type="file" className='add__image'accept="image/*" />
                    <label htmlFor="add__image">Select image</label>
                    <button className='button__add'>добавить продукт</button>
                    </form>
    
                    <div className="login__right-side2 login__right-add">
                    <img className='logo' src={Logo} alt="" />
                    </div>
                    </div>
            </div>

        </section>
    );
};

export default AddProduct;