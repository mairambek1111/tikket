import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import headericon from "@/assets/headerimage.png";
import ButtonUi from "@/ui/ButtonUi";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.wrap}>
              <Image
                src={headericon}
                width={100}
                height={100}
                alt="Header Icon"
              />
            </div>
            <div>
              <button className={styles.btn}>
                <ButtonUi />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
