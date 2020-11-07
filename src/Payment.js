import React from 'react';
import { Link } from 'react-router-dom';
import CheckOutProduct from './CheckOutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';

const Payment = () => {
    const [{basket,user}] = useStateValue();
    return (
        <div className="payment">
        <div className="payment__container">
        <h1>
            CheckOut (<Link className="payment__checkoutItem" to ="/checkout">{basket?.length} items</Link>)
        </h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p> 5th main,</p>
                    <p>Vijay Nagar Bengaluru, Karnataka 560040</p>
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review Items and delivery</h3>
                    <div className="payment__items">
                    {basket.map((item,i)=>(
                    <CheckOutProduct 
                    image={item.image} key = {item.id+i}
                    price={item.price} id={item.id}
                    title={item.title} rating={item.rating} />
                ))}
            </div>
                </div>
            </div>
            <div className="payment__section">
              <div className="title">
                  <h3>Payment Method</h3>
              </div>
              <div className="payment__details">
                  {/* stripe */}
              </div>
            </div>
        </div>
            
        </div>
    );
};

export default Payment;