import React from 'react';
import "./CheckOut.css";
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const CheckOut = () => {
    const [{basket,user},] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                 alt="ad" className="checkout__ad"/>
                 <div>
                     <h3>{user?.email}</h3>
                     <h2 className="checkout__title">
                         Your Shopping Basket
                     </h2>
                     {basket.map((item,i)=>(
                         
                         <CheckOutProduct key={item.id+i} image={item.image}
                          price={item.price} id={item.id}
                          title={item.title} rating={item.rating} />
                     ))}
                 </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
};

export default CheckOut;