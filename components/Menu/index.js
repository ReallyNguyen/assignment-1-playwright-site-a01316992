import Image from "next/Image";
import menu from "@/public/icons/menu-icon.png";
import { useState } from "react";
import menuBackground from "@/public/background-images/menuBackground.png";
import styles from "@/components/Menu/Menu.module.css";

export default function Menu() {
  const [isActive, setIsActive] = useState();
  console.log(isActive);

  if (!isActive == true) {
    return (
      <>
        <div className={styles.menu}>
          <div className={styles.wrap}>
            <Image src={menuBackground} className={styles.menu_background} />
          </div>
          <div className={styles.text_wrap}>
            <div className={styles.exit}>
              <h1
                className={styles.exit_text}
                onClick={() => setIsActive(!isActive)}>
                x</h1>
            </div>
            <div className={styles.menu_text}>
              <ul className={styles.list}>
                <a href="http://localhost:3000/">
                  <li>Home</li>
                </a>
                <a href="http://localhost:3000/about">
                  <li>About</li>
                </a>
                <a href="http://localhost:3000/contact">
                  <li>Contact</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Image className={styles.menu}
          src={menu}
          style={{ width: "70px", height: "55px", cursor: "pointer" }}
          onClick={() => setIsActive(!isActive)}
        />
      </>
    );
  }
}
