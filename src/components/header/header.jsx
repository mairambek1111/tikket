import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import headericon from "@/assets/headerimage.png";
function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.wrap}>
              <Image src={headericon} width={100} height={100} />
            </div>
            <button className={styles.btn}>Купить билет</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
