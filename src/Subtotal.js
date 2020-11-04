import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
    let inr = <> &#8377; </>
    return (
        <div className="subtotal">
           <CurrencyFormat 
           renderText = {(value)=> (
               <>
               <p>
                   Subtotal (0 items): <strong>0</strong>
               </p>
               <small className="subtotal__gift">
                   <input type="checkbox" />This Order Contains a gift
               </small>
               </>
           )}
           decimalScale = {2}
           value={0}
           displayType= {"text"}
           thousandSeparator={true}
           prefix={inr}
         />
         <button>Proceed To CheckOut</button>
        </div>
    );
};

export default Subtotal;