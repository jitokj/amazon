import React from 'react';
import "./CheckOut.css";

const CheckOut = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Jupiter_2020/PHASE-3/Sliders/V259539351_IN_PC_Laptops_Jupiter_WF_1500x300_slider_8._CB418110559_SY250_.jpg"
                 alt="ad" className="checkout__ad"/>
                 <div>
                     <h2 className="checkout__title">
                         Your Shopping Basket
                     </h2>
                 </div>
            </div>
        </div>
    );
};

export default CheckOut;