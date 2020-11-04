import React from 'react';
import "./Home.css";
import Hero from "./images/hero-amazon.jpg";
import Product from './Product';

const Home = () => {
    return (
        <div className = "home">
           <div className="home__container" id="top">
               <img className="home__image" src={Hero} alt="offer-logo"/>
          
           <div className="home__row">
               {/* product */}
               <Product id="111" title="OPPO A5 2020 (Dazzling White, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
                price={11999} image="https://images-na.ssl-images-amazon.com/images/I/71wPwmxo2NL._SX679_.jpg" rating={4} />
                {/* product */}
                <Product id = "222" title="OnePlus 8 Pro (Glacial Green 8GB RAM+128GB Storage)" price={54999}
                 image="https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SX425_.jpg" rating={5}/>
           </div>
           <div className="home__row">
           <Product id = "222"
            title="Alexa Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
             price={2299} image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg" rating={4}/>
               {/* product */}
               <Product id="333"
               title= "Acer Nitro 5 Intel Core i5-9th Gen 15.6-inch Display 1920 x 1080 Thin and Light Gaming Laptop"
                   price={62999} image = "https://images-na.ssl-images-amazon.com/images/I/71QXJg8uOCL._SL1500_.jpg" rating={3} />
                {/* product */}
                <Product id="444" title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Certified Android LED TV 55X7500H (Black) (2020 Model)"
                price={69543} image="https://images-na.ssl-images-amazon.com/images/I/91QD0vRZdVL._SX679_.jpg" rating={5} />
                {/* product */}
               
           </div>
           <div className="home__row">
               {/* product */}
               <Product id="555"
               title="boAt Rockerz 400 Bluetooth On-Ear Headphone with Mic(Carbon Black)"
                price={1950} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/61stQYWQO4L._SX569_.jpg" />
                 </div>
                 </div>
        </div>
    );
};

export default Home;