import React from 'react';
import End from '../component/End';
import Navbar from '../component/Navbar';
import Talkheader from '../component/Talkheader';
import styles from '../styles/Components/talk.module.css'

function Talk() {
  return (
    <>
      <Navbar active={'Contact'}/>
      <Talkheader />
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
        <End/>
    </>
  )
}

export default Talk;