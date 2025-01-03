import React, { useState } from "react";
// import Profile from "../../../assets/svg/profile.svg";
import "./navbar.css";


import saladImage from "../../../assets/salad.jpg";
import leafyvegetables from "../../../assets/leafyvegetable.jpg";
 import water from "../../../assets/water.jpg";
import fruits from "../../../assets/fruits.jpg";
import Milk from "../../../assets/milk.jpg";
import Apple from "../../../assets/Apple.jpg";
import Bread from "../../../assets/Bread.jpg";
import AddPage from "../../Add Page/AddPage";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="app">
        <header className="header">
          <h1>Meal Partner</h1>
          <div>
          <button className="extra-meal-btn" onClick={() => setShowModal(true)} >Add Your Extra Meal</button>
          {showModal && <AddPage onClose={() => setShowModal(false)}/>}
          </div>
        </header>
        <div className="sidebar">
          <ul>
            <li>Home</li>
            <li> Aboutus</li>
            <li>Catogery</li>
            <li>Blogs</li>
            <li>Profile</li>
          </ul>
          <button className="logout-btn">Logout</button>
        </div>
        <main className="main-content">
          <section className="diet-planner">
            <h2>Your diet planner</h2>
            <div className="diet-info">
              <div className="meal-section">
                <div>
                <h3>Today</h3>
                <p>8.00 Am Breakfast</p></div>
                <ul className="meal">
                  <div className="diet-img">
                    <img src={Milk} alt="milk-logo"/>
                  <li>1/2 Glass Milk</li>
                  </div>
                  <div className="diet-img">
                    <img src={Apple} alt="Apple-logo"/>
                  <li>1 Apple</li>
                  </div>
                  <div className="diet-img">
                    <img src={Bread} alt="Bread-logo"/>
                  <li>2 slices of Bread</li>
                  </div>

                </ul>

                <div>
                <p>
                  Today Target:<strong>243 Calories</strong>
                </p>
                <p>
                  Your Customizes:<strong>367 calories</strong>
                </p>
              </div></div>

              <div className="calories-section">
                <h3 style={{margin:'50px 150px'}}>Calories</h3>
                <div className="calorie-metre">
                  <div className="meter">&75%</div>
                </div>
              </div>
              <div className="extra-meal">
                <h3>Today Extra meal</h3>
                <ul>
                  <li>Snacks :potato chips (536 calories)</li><br></br>
                  <li> coffee:350ml (150 calories)</li><br></br>
                  <li> samosa :40g(174 calories)</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="healthly-benefits">
            <h2 style={{margin:'10px 70px'}}>Healthly Benefits</h2>
            <div className="benefits-grid">
              <div className="benefits-item">
                <img src={saladImage} alt="salad-logo"/>
                 <h1>Fresh salad with vibrant veggies</h1>
                </div>
              <div className="benefits-item">
                <img src={fruits} alt="fruits-logo" className="benefit-img"/>
               <h1> Healthy Dried Fruits and Nuts </h1>
                </div>
              <div className="benefits-item">
                <img src={leafyvegetables} alt="leafy-logo"/>
            <h1>Vibrant Leafy salad with Bell peppers</h1>
                </div>
              <div className="benefits-item">
                <img src={water} alt="water-logo"/>
                <h1>Refreshing </h1>

                </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
export default Navbar;
