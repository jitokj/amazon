import React from 'react';
import "./CheckOutProduct.css";
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';


const CheckOutProduct = ({id,image,title,price,rating,hideButton}) => {
    const [,dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt={`product-${id}`} className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
               <p className="checkoutProduct__price"> <small>{"₹"}</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating).fill().map((_,i)=>(
                    <div key={i+id}>
                    <p><StarIcon  fontSize="small" style={{ color: "Yellow" }}  /></p>
                    </div>
                ))}
                </div>
                {!hideButton && ( <button onClick={removeFromBasket} >Remove from Basket</button>)}
               
            </div>
        </div>
    );
};

export default CheckOutProduct;