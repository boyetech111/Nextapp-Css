import React from 'react'
import styles from '../styles/Components/workheader.module.css';

function Talkheader() {
  return (
    <>
       <div className={styles.headercontainer}>
       <div className={styles.headdescription}>
        <p className={styles.headline}>Become our partner Let’s talk about your next projects</p>
        <p id={styles.subheadline}>
           Drop us a line with the form below or better still shoot us
           an email on hello@magastack.tech
        </p>
       </div>
    </div> 
    </>
  )
}

export default Talkheader;