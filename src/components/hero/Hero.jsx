"use client";
import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import image from "@/assets/Hero-image.jpg";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";

function Hero() {
  return (
    <>
      <div className={`${styles.hero} pb-[7pc]`}>
        <div className={styles.imagewrap}>
          <Image src={image} className={styles.image} alt="Hero Image" />
        </div>
        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>О мероприятии</h1>
            <div className={styles.arrow}>
              <Link
                activeClass="active"
                to="test2"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <FaArrowDown className={styles.gif} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
