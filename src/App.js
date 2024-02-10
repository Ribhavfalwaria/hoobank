import React from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Billing from "./components/Billing";
import Business from "./components/Business";
import CardDeal from "./components/CardDeal";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} `}>
        <div className={` ${styles.boxWidth}`}>
          <Hero/>
          </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={` ${styles.boxWidth}`}>
          <Stats/> 
          <Business/> 
          <Billing/> 
          <CardDeal/> 
          <Testimonials/> 
          <Clients/> 
          <CTA/> 
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
