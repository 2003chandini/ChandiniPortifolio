import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Get in touch!</p>
      </div>
      <ul className={styles.links}>
      <li className={styles.link}>
          <img src={getImageUrl("contact/phone.png")} alt="phone icon" />
          <a href="">6281744214</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:chandinivenkatamanisri@gmail.com">chandinivenkatamanisri@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/chandini-tammina-4b348b231/">linkedin.com/chandini-tammina/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/2003chandini">github.com/Chandini-Tammina</a>
        </li>
      </ul>
    </footer>
  );
};