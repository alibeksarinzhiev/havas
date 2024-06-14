import React from 'react';
import './AddProducts.scss'

import Logo from '../../assets/логотип 3.png'

const AddProduct = () => {
    return (
        <section>
          
                <div className="container">
                <div className='add__container'>
                    <form className='add__product-form' action="">
                    <input type="text" className ='add__category'/> <label htmlFor="add__category">Add category</label>
                    <input type="text" className ='add__title'/><label htmlFor="add__title">Add title</label>
                    <input type="text" className ='add__price'/><label htmlFor="add__price">Add price</label>
                    <input type="text" className ='add__description'/><label htmlFor="add__description">Add description</label>
                    <input type="text" className ='add__sale'/><label htmlFor="add__sale">Add sale</label>
                    <input type="text" className ='add__promoution'/><label htmlFor="add__promoution">Add promoution</label>
    
                    
                    <input type="file" className='add__image' id='add__image' accept="image/*" />
                    <label htmlFor="add__image">Select image</label>
                    <button className='button__Add'>добавить продукт</button>
                    </form>
    
                    <div className="login__right-side2">
                    <img className='logo' src={Logo} alt="" />
                    </div>
                    </div>
            </div>

        </section>
    );
};

export default AddProduct;