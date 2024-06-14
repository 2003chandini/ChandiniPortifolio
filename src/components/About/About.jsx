import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/clo.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cplogo (1).jpg")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            <h3>AWS Certified Cloud Practitioner</h3>
  <p>
    Validate at : <a href="https://www.credly.com/badges/45990a53-63b3-409c-864c-464a04ed0408/public_url" target="_blank">https://www.credly.com/badges/45990a53-63b3-409c-864c-464a04ed0408/public_url</a>
  </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/sql.jpg")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Hackerrank SQL(Basic)</h3>
              <p>
    Validate at : <a href="https://www.hackerrank.com/certificates/c2a00c9bb612"target="_blank">https://www.hackerrank.com/certificates/c2a00c9bb612</a>
  </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/redha.jpg")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Red Hat Certified Enterprise Application Developer </h3>
              <p>
    Validate at : <a href="https://www.credly.com/badges/bd134a94-a59a-45fa-96cc-874c2b429cb6/public_url"target="_blank">https://www.credly.com/badges/bd134a94-a59a-45fa-96cc-874c2b429cb6/public_url</a>
  </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/jav.jpg")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Hackerrank Java(Basic)</h3>
              <p>
    Validate at : <a href="https://www.hackerrank.com/certificates/819134fb8598"target="_blank">https://www.hackerrank.com/certificates/819134fb8598</a>
  </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};