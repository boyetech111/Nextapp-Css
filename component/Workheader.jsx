import React from 'react';
import styles from '../styles/Components/workheader.module.css';


function Workheader() {
  return (
    <div className={styles.headercontainer}>
       <div className={styles.headdescription}>
        <p className={styles.headline}>Check out some of our partner’s projects</p>
        <p id={styles.subheadline}>
          We have collaborated on a variety of projects across
          divers industries and discipline.Yes, we make complex 
          idea into usable, functional digital products and help our
          partners reach their goals 
        </p>
       </div>
    </div>
  )
}

export default Workheader;