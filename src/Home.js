import React from 'react';
import "./Home.css";
import Hero from "./images/hero-amazon.jpg";
import Oppo from "./images/oppo.jpg";
import OnePlus from "./images/OnePlus.jpg";
import Product from './Product';

const Home = () => {
    return (
        <div className = "home">
           <div className="home__container">
               <img className="home__image" src={Hero} alt="offer-logo"/>
          
           <div className="home__row">
               {/* product */}
               <Product title="OPPO A51" price="15,999" image={Oppo} rating={4} />
                {/* product */}
                <Product title="One Plus 8T" price="39,999" image={OnePlus} rating={5}/>
           </div>
           <div className="home__row">
               {/* product */}
               <Product />
                {/* product */}
                <Product />
                {/* product */}
                <Product />
           </div>
           <div className="home__row">
               {/* product */}
               <Product />
                 </div>
                 </div>
        </div>
    );
};

export default Home;