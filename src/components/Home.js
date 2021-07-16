import React from "react";
import Product from "./Product";

function Main() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        <div className="home_row">
          <Product
            id="123456"
            title="The Lean StartUp"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={200.00}
            rating={5}
          />
          <Product
            id="789012" 
            title="HP Pavilion Gaming 15.6-inch(39.62 cms) FHD Gaming Laptop (Ryzen 5-3550H/8GB/1TB HDD/M.2 Slot/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black/2.25 kg), 15-ec0100AX"
            image="https://images-na.ssl-images-amazon.com/images/I/71FeUtw%2BTPL._SL1500_.jpg"
            price={75630.00}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product 
            id="789016" 
            title="HP Lightweight 100 Gray 15 Backpack"
            image="https://images-na.ssl-images-amazon.com/images/I/91YJzKRI1OL._SL1500_.jpg"
            price={1399.00}
            rating={3}
          />
          <Product 
            id="789010" 
            title="OPPO Enco W31 Bluetooth Wireless Earphones"
            image="https://images-na.ssl-images-amazon.com/images/I/61bC-pT5bpL._SL1500_.jpg"
            price={3499.00}
            rating={4}
          />
          <Product 
            id="789013" 
            title="OPPO F19 Pro+ 5G"
            image="https://images-na.ssl-images-amazon.com/images/I/71nT6xat93L._SL1500_.jpg"
            price={25499.00}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product 
            id="789014" 
            title="ASUS Vivo AiO V222, 21.5 FHD, Dual Core Intel Celeron J4005, All-in-One Desktop (4GB/1TB HDD/Windows 10/Integrated Graphics/with Wired Keyboard)"
            image="https://images-na.ssl-images-amazon.com/images/I/71kDCavI6JS._SL1500_.jpg"
            price={55499.00}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
export default Main;
