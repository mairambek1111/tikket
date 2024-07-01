import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import image from "@/assets/Hero-image.jpg";
import { FaArrowDown } from "react-icons/fa6";
function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.imagewrap}>
          <Image src={image} className={styles.image} />
        </div>
        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>Конгресс 2024</h1>
            <div className={styles.arrow}>
              <FaArrowDown className={styles.gif} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
