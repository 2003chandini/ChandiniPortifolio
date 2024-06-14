import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Tammina Chandini Venkata Mani Sri</h1>
        <p className={styles.description}>
        Emerging full-stack developer and aspiring data analyst eager to contribute fresh 
        perspectives to innovative projects. Ready to embark on new challenges and make an impact. 
        Let's collaborate and create something remarkable!<br></br>
<br></br>           Reach out if you'd like to learn more!
        </p>
        <a href="mailto:chandinivenkatamanisri@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/chand.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};