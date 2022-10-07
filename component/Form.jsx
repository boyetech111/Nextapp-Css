import React from 'react';
import styles from '../styles/Components/form.module.css';

function Form() {
  return (
    <>
    <form className={styles.form}>
        <div className={styles.inputgroup}>
        <label className={styles.label}>Full Name</label>
        <input className={styles.input} type='name' placeholder='Your name'/>       
        </div>     
        <div className={styles.inputgroup}>
            <label className={styles.label}>Email</label>
            <input className={styles.input} type='email' placeholder='Your email'/>   
            </div>     
        <div className={styles.inputgroup}>
            <label className={styles.label}>Phone Number</label>
            <input className={styles.input} type='tel' placeholder='Your number' />   
            </div>     
        <div className={styles.inputgroup}>
            <label className={styles.label}>Message</label>
            <textarea  className={styles.textarea} placeholder='Tell us briefly about your project' />   
        </div> 
        <button className={styles.inputbutton}>Send Message</button>       
    </form>    
</>
  )
}

export default Form;