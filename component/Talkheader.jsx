import React from 'react'
import styles from '../styles/Components/talkheader.module.css'
function Talkheader() {
  return (
    <>
       <div className={styles.talkcontainer}>
       <div className={styles.talkdescription}>
        <p className={styles.talkline}>Become our partner Let’s talk about your next projects</p>
        <p id={styles.talkheadline}>
          Drop us a line with the form below or better still shoot us
          an email on hello@magastack.tech
        </p>
       </div>
    </div> 
    </>
  )
}

export default Talkheader;