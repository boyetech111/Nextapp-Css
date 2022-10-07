import React from 'react';
import styles from '../styles/Components/button.module.css';

function Button({title}) {
  return (
    <div className={styles.btn}>
       <button className={styles.button} id={styles.button}>{title}</button>
    </div>
  )
}

export default Button;