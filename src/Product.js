import React from 'react';
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';



const Product = ({id,title,image,price,rating}) => {
    
   
    return (
        <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>&#8377; </small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_,i)=>(
                    <div key={i+id}>
                    <p><StarIcon  fontSize="small" style={{ color: "Yellow" }}  /></p>
                    </div>
                ))}
            
               
            </div>
        </div>
        <img src={image} alt="Oppo phone"/>
        <button>Add to Basket</button>
            
        </div>
    );
};

export default Product;