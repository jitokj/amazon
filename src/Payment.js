import {useStripe, useElements,CardElement } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link,useHistory } from 'react-router-dom';
import CheckOutProduct from './CheckOutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import {getBasketTotal} from "./reducer";
import axios from './Axios';


const Payment = () => {

    const stripe= useStripe();
    const elements = useElements();
    const history = useHistory();
    
    const [processing,setProcessing] = useState("");
    const [succeeded,setSucceeded] = useState(false);
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [{basket,user}] = useStateValue();
    const [clientSecret,setClientSecret] = useState("");

    useEffect(()=>{
        const getClientSecret = async ()=>{
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) *100}`
            })
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    },[basket])

    console.log("clent secret==>",clientSecret);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            history.replace("/orders");
        })
    }

    const handleChange = (e)=>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

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
              <div className="payment__title">
                  <h3>Payment Method</h3>
              </div>
              <div className="payment__details">
                  {/* stripe */}
                  <form onSubmit={handleSubmit} >
                      <CardElement onChange={handleChange} />
                      <div className="payment__priceContainer">
                      <CurrencyFormat 
           renderText = {(value)=> (
               <h3>Order Total: {value}</h3>
           )}
           decimalScale = {2}
           value={getBasketTotal(basket)}
           displayType= {"text"}
           thousandSeparator={true}
           prefix={"₹"}
         />
         <button disabled={processing || disabled || succeeded}>
         <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
         </button>
        
                      </div>
                      {error && <div>{error}</div>}
                  </form>
              </div>
            </div>
        </div>
            
        </div>
    );
};

export default Payment;