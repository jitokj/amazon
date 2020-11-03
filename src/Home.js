import React from 'react';
import "./Home.css";
import Hero from "./images/hero-amazon.jpg";
import Oppo from "./images/oppo.jpg";
import OnePlus from "./images/OnePlus.jpg";
import Echo from "./images/amazon-echo.jpg";
import  Acer from "./images/acer_nitro.jpg";
import Sony from "./images/sony.jpg";
import Boat from "./images/boat.jpg";
import Product from './Product';

const Home = () => {
    return (
        <div className = "home">
           <div className="home__container">
               <img className="home__image" src={Hero} alt="offer-logo"/>
          
           <div className="home__row">
               {/* product */}
               <Product id="111" title="OPPO A5 2020 (Dazzling White, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
                price="11,999" image={Oppo} rating={4} />
                {/* product */}
                <Product id = "222" title="OnePlus 8 Pro (Glacial Green 8GB RAM+128GB Storage)" price="54,999" image={OnePlus} rating={5}/>
           </div>
           <div className="home__row">
           <Product id = "222"
            title="Roll over image to zoom in See what Alexa can do Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
             price="2,299" image={Echo} rating={4}/>
               {/* product */}
               <Product id="333"
               title= "Acer Nitro 5 Intel Core i5-9th Gen 15.6-inch Display 1920 x 1080 Thin and Light Gaming Laptop (8GB Ram+16GB Optane/1TB HDD/Windows 10 Home/GTX 1650 Graphics/Obsidian Black/2.3 Kgs), AN515-54"
                   price="62,999" image = {Acer} rating={3} />
                {/* product */}
                <Product id="444" title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Certified Android LED TV 55X7500H (Black) (2020 Model)"
                price="69,543" image={Sony} rating={5} />
                {/* product */}
               
           </div>
           <div className="home__row">
               {/* product */}
               <Product id="555"
               title="boAt Rockerz 400 Bluetooth On-Ear Headphone with Mic(Carbon Black)"
                price="1950" rating={4} image={Boat} />
                 </div>
                 </div>
        </div>
    );
};

export default Home;