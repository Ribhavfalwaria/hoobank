import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps .
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Easy Registeration process ,Apply for your card today and complete the KYC information then the card will be activated within 60 minutes and details will be sent to your registered mail.


        </p>
      <Button styles={'mt-10'}/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="" className="w-[100%] h-[100%] " />
        
      </div>
    </section>
  );
};

export default CardDeal;
